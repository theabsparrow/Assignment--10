import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { FiFacebook } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <Fade>
            <div className="bg-[#131313] py-2 font-inter mt-8">
                <footer className="px-2 md:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 text-base-content">

                    <div className='flex flex-col items-center lg:items-start' data-aos="fade-left" data-aos-duration="1000">
                        <img className='w-[5vw]' src={logo} alt="" />
                        <p className=' opacity-80 text-xl text-center lg:text-left text-[#ef2853] font-semibold' >CraftArt</p>
                        <p className='text-white text-lg font-medium text-center lg:text-left'>we are well known art and craft org. here we provide drawing and painti art</p>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div data-aos="zoom-in" data-aos-duration="1200" className='text-white opacity-80 flex flex-col items-center lg:items-start mx-auto'>
                            <h6 className="footer-title font-semibold">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1400" className='text-white opacity-80 flex flex-col items-center lg:items-start mx-auto'>
                            <h6 className="footer-title font-semibold">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1600" className='flex flex-col items-center lg:items-start mx-auto'>
                        <h6 className="footer-title text-white opacity-80 font-semibold">Social</h6>
                        <div className="flex items-center gap-4">
                            <Link><FiFacebook className='text-3xl text-white'></FiFacebook> </Link>
                            <Link><FaYoutube className='text-3xl text-white'></FaYoutube> </Link>
                            <Link><FaGithub className='text-3xl text-white'></FaGithub> </Link>
                        </div>
                        <form>
                            <h6 className="footer-title text-white opacity-80">Newsletter</h6>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text text-white opacity-80">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                    <button className="btn bg-[#006aff] border-none join-item text-white">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </footer>

                <aside className='text-center mt-3'>
                    <p className='text-white opacity-80 font-semibold'>Copyright © 2024 - All right reserved by <span className='text-[#ef2853]'>CraftArt</span> drawing Company Ltd</p>
                </aside>
            </div>
        </Fade>
    );
};

export default Footer;