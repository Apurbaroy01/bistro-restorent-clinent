import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut=()=>{
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current email:", currentUser?.email)
            setUser(currentUser);
            setLoading(false)

        })
        return unsubscribe;
    }, [])

    const AuthInfo = {
        createUser,
        signIn,
        logOut,
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