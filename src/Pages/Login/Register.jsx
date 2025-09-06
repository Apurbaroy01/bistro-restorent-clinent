import { Mail, Lock } from "lucide-react";
import { useRef, useEffect, useState, useContext } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, updateprofile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [eye, setEye] = useState(false);
    const [error, setError] = useState(null);
    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6); // প্রথমবার ক্যাপচা লোড হবে
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        const userCaptchaValue = captchaRef.current.value;


        // ✅ ক্যাপচা চেক এখানে হবে
        if (validateCaptcha(userCaptchaValue)) {
            setError(null);
            console.log("Login Success:", email, password,url);

            createUser(email, password)
                .then((result) => {
                    console.log(result)
                    navigate("/")

                    updateprofile(name,url)
                    .then(()=>{
                        console.log("user profile update")
                    })
                    .catch((error)=>{
                        console.log(error.message)
                    })
                })
                .catch((error) => {
                    console.log(error)
                })

            // ✅ ক্যাপচা রিসেট
            loadCaptchaEnginge(6);
            captchaRef.current.value = "";

        } else {
            setError("❌ Invalid captcha, please try again.");
        }
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

                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <input type="url" className="grow" placeholder="Url" name="url" />
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

                            {/* Captcha */}
                            <label className="flex flex-col gap-2 w-full">
                                <LoadCanvasTemplate />
                                <div className="input input-bordered flex items-center gap-2 w-full">
                                    <input
                                        ref={captchaRef}
                                        type="text"
                                        className="grow"
                                        placeholder="Type captcha"
                                    />
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </label>

                            <div className="flex justify-between items-center text-sm">
                                <a className="link link-hover text-indigo-600">Forgot password?</a>
                                <div className="link link-hover text-indigo-600"><Link to="/login">Alredy Login</Link></div>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-2"
                            >
                                Register
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
