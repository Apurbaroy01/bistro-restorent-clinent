import { Mail, Lock } from "lucide-react";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [eye, setEye] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    

    // const [error, setError] = useState(null);




    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then((result) => {
                console.log(result)
                navigate(from, { replace: true });

            })
            .catch((error) => {
                console.log(error.message)
            })

    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center text-indigo-600">Welcome Back</h1>
                    <p className="text-center text-gray-600 mb-6">
                        Please login to your account to continue
                    </p>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="space-y-4">

                            {/* Email Input */}
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <input type="email" className="grow" placeholder="Email" name="email" />
                            </label>

                            {/* Password Input */}
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <Lock className="w-5 h-5 text-gray-400" />
                                <input
                                    type={eye ? "text" : "password"}
                                    className="grow"
                                    placeholder="Password"
                                    name="password"
                                />
                                <p className="text-xl cursor-pointer" onClick={() => setEye(!eye)}>
                                    {eye ? <FaRegEye /> : <FaRegEyeSlash />}
                                </p>
                            </label>



                            <div className="flex justify-between items-center text-sm">
                                <a className="link link-hover text-indigo-600">Forgot password?</a>
                                <a className="link link-hover text-indigo-600"><Link to="/register">Create account</Link></a>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-2"
                            >
                                Login
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
