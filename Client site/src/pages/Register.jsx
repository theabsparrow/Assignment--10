import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const {createUser,setUser,updateUserProfile} = useContext(GlobalContex);
    const [error, setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const check = e.target.check.checked;
        const confirmPass = e.target.confirmPass.value;
        console.log(name,photo)
        setError("")

        if(password.length < 6){
            setError("your password should be at least 6 character!")
            return
        }
        else if(!/[A-Z]/.test(password)) {
            setError("your password should be at least one uppercase letter")
            return
        }
        else if(!/[a-z]/.test(password)) {
            setError("your password should be at least one lowercase letter")
            return
        }
        else if (password !== confirmPass) {
            setError("confirm password dosen't match to password!")
            return
        }
        else if (!check){
            setError("you must accept our terms and service")
            return
        }

        createUser(email, password)
        .then( (result) => {
            setUser(result.user)
            console.log(result.user)
            updateUserProfile(name, photo)
            .then(() => {
                console.log("profile updated")
            })

            toast.success("you have created account successfully")
        })
        .catch( (error) => {
           
            toast.error(error.message)
        })
    }

    return (
        <div className="px-2 md:px-8 lg:px-20 font-inter">
             <Helmet>
                <title>Register | CraftArt</title>
            </Helmet>
            <div className="w-full flex justify-center">

                <div className="w-[90vw] lg:w-[60vw] shadow-xl px-8 lg:px-14 py-4 rounded-xl">
                    <div className="mt-4 lg:mt-0">
                        <h1 className="text-5xl lg:text-3xl font-semibold text-[#ef2853]">Sign Up Now</h1>
                    </div>

                    <form onSubmit={handleRegister} className="mt-8 lg:mt-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Full Name:</span>
                            </label>
                            <input type="text" placeholder="Enter your full name" name="name" className="input input-bordered " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Email:</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Photo URL:</span>
                            </label>
                            <input type="text" placeholder="Enter your photo URL" name="photo" className="input input-bordered" />
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

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Confirm Password:</span>
                            </label>
                            <input type={showConfirmPass? "text" : "password"}
                                placeholder="Confirm password"
                                name="confirmPass"
                                className="input input-bordered" required />
                            <span className="absolute top-[52px] right-3" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                {
                                    showConfirmPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>
                                }
                            </span>
                        </div>

                        <div className="flex gap-1 items-center mt-3">
                            <input type="checkbox" name="check" id="checki" />
                            <label>
                                <h1 className="lg:text-lg text-xl font-semibold lg:font-medium">Please accept our <Link className="text-blue-700 hover:text-[#ef2853]">terms and service</Link></h1>
                            </label>
                        </div>
                        <div>
                            {
                                error && <span className="text-lg font-medium text-red-700">{error}</span>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="bg-[#ef2853] text-white text-lg font-medium py-2 rounded-xl hover:bg-black">Sign Up</button>
                        </div>

                    </form>
                    <div className="mt-3">
                        <h1 className="text-lg font-medium">Already have an account? Please <Link className="text-blue-700 hover:text-[#ef2853]" to='/login'>Login</Link></h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;