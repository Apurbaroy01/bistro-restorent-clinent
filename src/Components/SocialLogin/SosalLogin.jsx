import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hookes/useAuth";


const SosalLogin = () => {
    const { googleSignIn } = useAuth();


    const handleGoogleSubmit = () => {
        googleSignIn()
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div className="text-center">
            <button onClick={handleGoogleSubmit} className="btn btn-circle">
                <FcGoogle />
            </button>
        </div>
    );
};

export default SosalLogin;