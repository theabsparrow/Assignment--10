import { useContext, useEffect, useState } from 'react';
import logo from '../../../public/logo.png'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { GlobalContex } from '../authProvider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import toast from 'react-hot-toast';
import { Fade } from "react-awesome-reveal";


const Navbar = () => {
    const [display, setDisplay] = useState(false)
    const [theme, setTheme] = useState("light");
    const { user, logout } = useContext(GlobalContex)

    useEffect(() => {
        localStorage.setItem("userTheme", theme)
        const uiTheme = localStorage.getItem("userTheme")
        document.querySelector('html').setAttribute('data-theme', uiTheme)
    }, [theme])

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    // logout function
    const handleLogOut = () => {
        logout()
            .then(() => {
                toast.success("log out successfully")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <div className="px-2 md:px-8 lg:px-20 flex items-center justify-between font-inter relative bg-white shadow-xl py-4">

            {/* hamburger icon */}
            <div onClick={() => setDisplay(!display)} className='lg:hidden'>
                {
                    display === true ? <RxCross2 className='text-5xl text-[#ef2853]'></RxCross2> : <MdOutlineMenu className='text-5xl text-[#ef2853]'></MdOutlineMenu>
                }
            </div>

            {/* title and logo */}
            <Link to='/'>
                <div className='flex gap-1 items-center'>
                    <img className='w-[10vw] lg:w-[3vw]' src={logo} alt="logo" />
                    <h1 className='text-4xl font-bold text-[#ef2853]'>CraftArt</h1>
                </div>
            </Link>

            {/* all the rout */}
            <Fade>
                <div className='hidden md:hidden lg:flex items-center gap-8'>
                    <div>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="/allArtItems" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}> All Art & craft Items</NavLink>
                    </div>
                    <div>
                        <NavLink to="/addCardItems" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>Add Craft Item</NavLink>
                    </div>
                    <div>
                        <NavLink to="/mycraftList" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>My Art&Craft List</NavLink>
                    </div>
                </div>
            </Fade>

            {/* for small device */}
            <div className={`${display ? " " : "hidden"} lg:hidden z-10 absolute top-[100px] space-y-3 flex flex-col items-start bg-white shadow-xl rounded-xl p-3`}>
                <div>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>Home</NavLink>
                </div>
                <div>
                    <NavLink to="/allArtItems" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}> All Art & craft Items</NavLink>
                </div>
                <div>
                    <NavLink to="/addCardItems" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>Add Craft Item</NavLink>
                </div>
                <div>
                    <NavLink to="/mycraftList" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>My Art&Craft List</NavLink>
                </div>

                <Fade>
                    <div className='space-y-3'>
                        {
                            !user ? <><div>
                                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>Login</NavLink>
                            </div>
                                <div>
                                    <NavLink to="/register" className={({ isActive }) => isActive ? 'text-xl font-medium text-[#ef2853] border-b-[2px] border-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853]'}>Register</NavLink>
                                </div>
                                <div>
                                    <Link to="/profile"><CgProfile className='text-6xl text-[#ef2853]'></CgProfile></Link>
                                </div>
                            </> : <> <div>
                                {user?.photoURL ? <Link to="/profile"><img className='w-[10vw] lg:w-[2.5vw] rounded-full border-[2px] border-[#ef2853]' src={user.photoURL} alt="profilephoto" /></Link> : <Link to="/profile"><CgProfile className='text-4xl text-[#ef2853]'></CgProfile></Link>}
                            </div>
                                <div className='text-lg font-medium text-black'>
                                    {user ? (user.displayName ? user.displayName : user.email) : <span>Login to see your name</span>}
                                </div>
                                <div className='mt-1'>
                                    <Link to='/profile' className="text-xl font-medium text-black hover:border-[2px] hover:border-[#ef2853] hover:bg-white hover:text-[#ef2853] pb-1">Profile</Link>
                                </div>
                                <div className='mt-1'>
                                    <Link to='/login' onClick={handleLogOut} className="text-xl font-medium text-black hover:border-[2px] hover:border-[#ef2853] hover:bg-white hover:text-[#ef2853] pb-1">Log Out</Link>
                                </div>
                            </>
                        }
                    </div>
                </Fade>

            </div>

            <Fade>
                <div className='flex items-center gap-2'>

                    <div className='hidden lg:flex'>
                        <details className="dropdown ">

                            <summary className="m-1 z-10 btn bg-white hover:bg-white border-none shadow-none">
                                <div className="tooltip" data-tip={user ? (user.displayName ? user.displayName : user.email) : "login to see your name"}>
                                    {
                                        user?.photoURL ? <img className='w-[2.5vw] rounded-full border-[2px] border-[#ef2853]' src={user.photoURL} alt="profilephoto" /> : <CgProfile className='text-4xl text-[#ef2853]'></CgProfile>
                                    }
                                </div>

                            </summary>

                            {
                                user ? <ul className="p-2 shadow-xl menu dropdown-content z-10 bg-white rounded-box w-48 mt-2 ">
                                    <li className='mt-1'>
                                        <Link to='/login' onClick={handleLogOut} className="text-xl font-medium text-black hover:border-[2px] hover:border-[#ef2853] hover:bg-white hover:text-[#ef2853] pb-1">Log Out</Link>
                                    </li>
                                    <li className='mt-1'>
                                        <Link to="/profile" className="text-xl font-medium text-black hover:border-[2px] hover:border-[#ef2853] hover:bg-white hover:text-[#ef2853] pb-1">Profile</Link>
                                    </li>
                                </ul> : <ul className="p-2 menu dropdown-content z-10 bg-white shadow-xl rounded-box w-52 space-y-3">
                                    <li>
                                        <NavLink to="/login" className={({ isActive }) => isActive ? 'text-xl font-medium bg-[#ef2853] hover:bg-white text-black border-[2px] border-[#ef2853] hover:text-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853] hover:bg-white'}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register" className={({ isActive }) => isActive ? 'text-xl font-medium bg-[#ef2853] hover:bg-white text-black border-[2px] border-[#ef2853] hover:text-[#ef2853] pb-1' : 'text-black font-medium text-xl hover:text-[#ef2853] hover:bg-white'}>Register</NavLink>
                                    </li>
                                </ul>
                            }
                        </details>
                    </div>

                    {/* dark theme implement */}
                    <div>
                        <label className="flex cursor-pointer gap-3 items-center">
                            <MdLightMode className='text-5xl lg:text-xl'></MdLightMode>
                            <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-[#ef2853] hover:bg-[#ef2853]" />
                            <MdDarkMode className='text-5xl lg:text-xl'></MdDarkMode>
                        </label>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default Navbar;