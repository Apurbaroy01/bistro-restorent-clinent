import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import useAxiosPurblic from "../Hookes/useAxiosPurblic";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axoiosPublic = useAxiosPurblic();

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth)
    };

    const updateprofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current email:", currentUser)
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
                const info = {
                    email: currentUser.email
                };
                axoiosPublic.post('/jwt', info)
                    .then(data => {
                        if(data.data.token){
                            localStorage.setItem('access-token', data.data.token);
                        }
                    })
            }
            else{
                localStorage.removeItem('access-token');
            }

        })
        return unsubscribe;
    }, [axoiosPublic])

    const AuthInfo = {
        googleSignIn,
        createUser,
        signIn,
        logOut,
        updateprofile,
        user,
        loading

    }
    return (

        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;