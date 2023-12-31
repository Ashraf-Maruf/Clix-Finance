import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../Assets/img/Footer-logo.png'
import socialIcon1 from '../../Assets/social media icons/E-mail.png'
import socialIcon2 from '../../Assets/social media icons/web.png'
import socialIcon3 from '../../Assets/social media icons/contact.png'
import socialIcon4 from '../../Assets/social media icons/location.png'
import socialIcon5 from '../../Assets/social media icons/youtube.png'
import socialIcon6 from '../../Assets/social media icons/Facebook.png'
import socialIcon7 from '../../Assets/social media icons/instagram.png'
import socialIcon8 from '../../Assets/social media icons/footer-twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#140F16]'>
            <div className='w-11/12 mx-auto'>
                <footer className="footer pb-10 text-white md:gap-28 lg:gap-28 xl:gap-28 2xl:gap-28 3xl:gap-28">
                    <div>
                        <Link to="" className=' mb-4 mt-1'><img src={footerLogo} alt='' /></Link>
                        <p className=' font-poppins font-light text-[16px] leading-[30px]'>Clix is a utility-endowed digital asset platform that aims to provide the strongest and most rewarding platform for members. Its goal is to democratize financial freedom while saving mother nature with help of every community member.</p>
                    </div>
                    <div>
                        <span className="footer-title opacity-100 font-poppins font-bold text-[22px] leading-[33px]">Menu</span>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Home</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">About Us</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Services</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Our Team</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Login</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Contact us</Link>
                    </div>
                    <div>
                        <span className="footer-title opacity-100 font-poppins font-bold text-[22px] leading-[33px]">Quick Links</span>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Community</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Terms & Conditions</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Support</Link>
                        <Link to="" className="link no-underline font-poppins font-normal text-[16px] leading-[24px]">Privacy</Link>
                    </div>
                    <div>
                        <span className="footer-title opacity-100 font-poppins font-bold text-[22px] leading-[33px]">Contact Us</span>
                        <Link to="" className="link no-underline font-poppins font-normal flex justify-center items-center text-[16px] leading-[24px]"><span className=' mr-2'><img src={socialIcon1} alt='' /></span>xx@clix.com</Link>
                        <Link to="" className="link no-underline font-poppins font-normal flex justify-center items-center text-[16px] leading-[24px]"><span className=' mr-2'><img src={socialIcon2} alt='' /></span>www.clix.com</Link>
                        <Link to="" className="link no-underline font-poppins font-normal flex justify-center items-center text-[16px] leading-[24px]"><span className=' mr-2'><img src={socialIcon3} alt='' /></span> +123 456 7890</Link>
                        <Link to="" className="link no-underline font-poppins font-normal flex justify-center items-center text-[16px] leading-[24px]"><span className=' mr-2'><img src={socialIcon4} alt='' /></span><p>Lorem ipsum dolor sit amet.<br />Inventoreenim cum </p></Link>
                    </div>
                </footer>
                <footer className="footer py-4 border-t text-white bg-[#140F16]  border-base-300">
                    <div className="items-center grid-flow-col">
                        <p>Copyright 2022. | All Right Reserved.</p>
                    </div>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Link to=""><img src={socialIcon5} alt='' /></Link>
                            <Link to=""><img src={socialIcon6} alt='' /></Link>
                            <Link to=""><img src={socialIcon7} alt='' /></Link>
                            <Link to=""><img src={socialIcon8} alt='' /></Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;