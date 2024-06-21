import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {

    const [showPass, setShowPass] = useState(false)
    const { userLogin, setUser, loginWithGoogle, loginWithGithub } = useContext(GlobalContex)
    const navigateHome = useNavigate()
    const currentLocation = useLocation()


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.check.checked;
        console.log({ email, password, check });

        // user login function
        userLogin(email, password)
            .then((result) => {
                setUser(result.user)
                toast.success("login successfully")
                e.target.reset()
                navigateHome(currentLocation?.state? currentLocation.state:'/')
            })
            .catch((error) => {
                console.log((error.message))
                toast.error("invalid email or password, try again")
            })
    }

    // google login
    const googleLoginFunction = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user)
                toast.success("Successfully login with google")
                navigateHome(currentLocation?.state? currentLocation.state:'/')
            })
            .catch((error) => {
                console.log(error.message)
                toast.error("faild to login with google, try again")
            })
    }

    // gitHub login
    const githubLoginFunction = () => {
        loginWithGithub()
            .then((result) => {
                setUser(result.user)
                toast.success("successfully login with github")
                navigateHome(currentLocation?.state? currentLocation.state:'/')
            })
            .catch((error) => {
                console.log(error.message)
                toast.error("faild to login with github. try again")
            })
    }
    return (
        <div className="px-2 md:px-8 lg:px-20 font-inter">
             <Helmet>
                <title>Login | CraftArt</title>
            </Helmet>
            <div className="w-full flex justify-center">

                <div className="w-[90vw] lg:w-[60vw] shadow-xl px-8 lg:px-20 py-8 rounded-xl">
                    <div className="mt-8 lg:mt-0">
                        <h1 className="text-5xl lg:text-3xl font-semibold text-[#ef2853]">Login here</h1>
                    </div>

                    <form onSubmit={handleLogin} className="mt-8 lg:mt-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Email:</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Password:</span>
                            </label>
                            <input type={showPass ? "text" : "password"}
                                placeholder="Enter your password"
                                name="password"
                                className="input input-bordered" required />
                            <span className="absolute top-[52px] right-3" onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>
                                }
                            </span>
                        </div>

                        <div className="flex gap-1 items-center mt-3">
                            <input type="checkbox" name="check" id="checki" />
                            <label>
                                <h1 className="text-lg font-medium">Remember password</h1>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="bg-[#ef2853] text-white text-lg font-medium py-2 rounded-xl hover:bg-black">Login</button>
                        </div>

                    </form>

                    <div className="mt-3">
                        <h1 className="text-lg font-medium">New to this website? <Link className="text-blue-700 hover:text-[#ef2853]" to='/register'>Register here</Link></h1>
                    </div>

                    <div className="mt-7 space-y-4">
                        <div>
                            <button onClick={googleLoginFunction} className="flex items-center justify-center gap-20 w-full py-3 border-[1px] border-[#ef2853] rounded-xl text-lg text-[#ef2853] font-medium hover:bg-[#ef2853] hover:text-white"><span><FcGoogle className="text-2xl"></FcGoogle></span> Login with Google</button>
                        </div>
                        <div>
                            <button onClick={githubLoginFunction} className="flex items-center justify-center gap-20 w-full py-3 border-[1px] border-[#ef2853] rounded-xl text-lg text-[#ef2853] font-medium hover:bg-[#ef2853] hover:text-white"><span><FaGithub className="text-2xl text-black"></FaGithub></span> Login with GitHub</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;