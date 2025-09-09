import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hookes/useAuth";
import useAxiosPurblic from "../../Hookes/useAxiosPurblic";
import { useNavigate } from "react-router-dom";


const SosalLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPurblic();
    const navigate = useNavigate();


    const handleGoogleSubmit = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };

                axiosPublic.post('/users', userInfo)
                    .then(data => {
                        console.log(data.data)
                        navigate("/")
                    });
            })
            .catch((error) => {
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