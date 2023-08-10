import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/Logo.png'
import {
    HiBars3BottomRight,
    HiOutlineXMark,
} from "react-icons/hi2";
import './Navbar.css'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='w-11/12 mx-auto display xl:hidden 2xl:hidden'>
                <div className="navbar fixed top-0 bg-[#079E01] px-4 z-[50px] left-0  display mb-11   2xl:hidden">
                    <div className=' w-full py-2 mx-auto  flex justify-between items-center'>
                        <div>
                            <Link to='/'><img src={Logo} alt='logo' /></Link>
                        </div>
                        <div className='text-center ' onClick={() => setOpen(!open)}>
                            {open ?
                                <span className='open-nav'><HiOutlineXMark /></span>
                                :
                                <span className='close-nav'><HiBars3BottomRight /></span>
                            }
                        </div>
                    </div>
                    <div className={` fixed z-[30px] top-0 duration-700 ease-in-out ${open ? 'activeOpen' : 'left-[-999px]'}`}>
                        <div className=" bg-[#FFF] z-[50px] menu-area" onClick={() => setOpen(!open)}>
                            <div className="pt-14">
                                <div>
                                    <ul className="navbar-menu inline-block menu-horizontal items-center">
                                        <li><Link className='font-inter text-md font-normal' to="">Core Values</Link></li>
                                        <li><Link className='font-inter text-md font-normal' to="">Our Products</Link></li>
                                        <li><Link className='font-inter text-md font-normal' to="">NFT & Innovation?</Link></li>
                                        <li><Link className='font-inter text-md font-normal' to="">Roadmap</Link></li>
                                        <li><Link className='font-inter text-md font-normal' to="">Flowchart</Link></li>
                                        <li><Link className='font-inter text-md font-normal' to="">Collections</Link></li>
                                        <li><Link className='font-inter text-md font-normal' to="">Team</Link></li>
                                        <button className=" mt-4 font-inter text-md font-normal 2xl:ml-5 btn-button">Mint Now</button>
                                    </ul>
                                    <div className=" flex justify-center mt-4">
                                        <button className="btn w-44  hover:bg-[#079E01] bg-[#079E01]">Connect to Wallet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-11/12 hidden  xl:block 2xl:block mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link className=' text-white' to='/'><img src={Logo} alt='' /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-white menu-horizontal px-1">
                            <li><Link className='font-inter text-md font-normal' to="">Core Values</Link></li>
                            <li><Link className='font-inter text-md font-normal' to="">Our Products</Link></li>
                            <li><Link className='font-inter text-md font-normal' to="">NFT & Innovation?</Link></li>
                            <li><Link className='font-inter text-md font-normal' to="">Roadmap</Link></li>
                            <li><Link className='font-inter text-md font-normal' to="">Flowchart</Link></li>
                            <li><Link className='font-inter text-md font-normal' to="">Collections</Link></li>
                            <li><Link className='font-inter text-md font-normal' to="">Team</Link></li>
                            <button className="font-inter text-md font-normal 2xl:ml-5 btn-button">Mint Now</button>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn  xl:w-44 hover:bg-[#079E01] bg-[#079E01]">Connect to Wallet</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;