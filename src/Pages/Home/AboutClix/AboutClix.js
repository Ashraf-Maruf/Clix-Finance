import React from 'react';
import videoImg from '../../../Assets/img/video-bg.png'
import shape01 from '../../../Assets/shape/shape-img01.png'
import videoButton from '../../../Assets/icon/button.png'
import './AboutClix.css'
const AboutClix = () => {
    return (
        <div className='about-clix-bg  flex justify-center items-center  overflow-hidden h-[730px] py-14 mt-[-2px]'>
            <div className=' absolute  bottom-[200px] left-[-20px] '>
                <img src={shape01} alt='' />
            </div>
            <div>
                <div className=' flex justify-center'>
                    <h3 className='about-top-title text-white text-center mb-10 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>About</span> Clix Finance</h3>
                </div>
                <div className=' px-4'>
                    <div className="card video-bg   w-full h-[350px] lg:w-[950px] lg:h-[550px] xl:w-[950px] xl:h-[550px] 2xl:w-[950px] 2xl:h-[550px] 3xl:w-[950px] 3xl:h-[550px]" style={{ backgroundImage: `url(${videoImg})` }}>
                        <div className="card-body  cursor-pointer text-white justify-center items-center">
                            <button><img className=' w-28 h-28' src={videoButton} alt='' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutClix;