import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import HeroImg from '../../../Assets/img/bg-2.png'
import socialIcon1 from '../../../Assets/social media icons/twitter.png'
import socialIcon2 from '../../../Assets/social media icons/github.png'
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='hero bannerBg xm:h-[66.75rem] sm:h-[57.75rem] md:h-[57.75rem] xl:h-[57.75rem] 2xl:h-[57.75rem] 3xl:h-[57.75rem]' style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className=' py-5 w-full absolute z-20 top-0'>
                <Navbar></Navbar>
            </div>
            <div className=' w-11/12 mx-auto'>
                <div className=' flex  justify-between items-center text-white'>
                    <div className='xl:text-start 2xl:text-start 3xl:text-start max-w-[430px]' data-aos="zoom-in-right">
                        <h4 className="pt-2 font-poppins font-bold xm:text-[25px] sm:text-[35px] md:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] 3xl:text-[35px] sm:leading-[63px] md:leading-[63px] lg:leading-[63px] xl:leading-[63px] 2xl:leading-[63px] 3xl:leading-[63px]  ">A new era of investing: powered by innovation.</h4>
                        <div className=' my-4 w-full h-2 bg-[#079E01]'></div>
                        <p className=' pt-2 font-BeVietnam font-normal text-justify text-md opacity-70 leading-9'>Clix is a utility-endowed digital asset platform that operates on the Web 3 infrastructure. With Web3, Clix is able to offer a decentralized and transparent ecosystem that empowers users to own and control their digital assets, providing unprecedented financial freedom. The platform is committed to saving the environment with the help of every community member, and will partner with organizations and initiatives to help achieve this goal. By utilizing blockchain technology, Clix provides a secure, immutable, and tamper-proof ledger of transactions that enables users to engage in the new era of finance in a safe and trustless manner.
                        </p>
                        <div className="card-actions justify-start mt-6">
                            <button className="p-0 py-[8px] hover:bg-[#079E01] rounded-3xl w-full bg-[#079E01]">Introduction Video</button>
                            <button className="banner-button w-full  mt-7">Whitepaper</button>
                        </div>
                    </div>
                    <div className='banner-border xm:hidden flex justify-center items-center'>
                        <div className=' flex gap-4 flex-col-reverse'>
                            <span className=' banner-shape2'>
                                <Link to=""><img src={socialIcon2} alt='' /></Link>
                            </span>
                            <span className=' banner-shape1'>
                                <Link to=""><img src={socialIcon1} alt='' /></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;