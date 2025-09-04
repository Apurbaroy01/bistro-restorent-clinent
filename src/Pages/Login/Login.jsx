import { Mail, Lock } from "lucide-react"; // lucide-react install করলে কাজ করবে
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { LoadCanvasTemplate, loadCaptchaEnginge } from "react-simple-captcha";

const Login = () => {
    const [eye, setEye] = useState();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

    }
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
                                <input type={eye ? "password" : "text"} className="grow" placeholder="Password" name="password" />
                                <p className="text-xl" onClick={() => setEye(!eye)}>
                                    {
                                        eye ? <FaRegEyeSlash /> : <FaRegEye />
                                    }

                                </p>
                            </label>
                            <label className=" flex flex-col  gap-2 w-full">
                                <LoadCanvasTemplate />

                                <div className="input input-bordered flex items-center gap-2 w-full">
                                    <input type="text" className="grow" placeholder="Type captcha"  />
                                </div>

                            </label>

                            <div className="flex justify-between items-center text-sm">
                                <a className="link link-hover text-indigo-600">Forgot password?</a>
                                <a className="link link-hover text-indigo-600">Create account</a>
                            </div>

                            {/* Login Button */}
                            <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-2">
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
