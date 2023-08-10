import React from 'react';
import { Link } from 'react-router-dom';
import socialIcon from '../../../Assets/social media icons/social-media-icons.png'
const OurTeamCard = ({ item }) => {
    const { Img, name, title, details } = item
    return (
        <div className="card card-side bg-base-100 xm:flex-col md:flex-col lg:flex-col xl:flex-row shadow-xl my-10">
            <img src={Img} alt="Movie" />
            <div className="card-body">
                <h2 className="card-title text-[#333333] font-roboto font-bold text-[32px] uppercase">{name}</h2>
                <h5 className='text-[#333333] font-poppins font-medium text-[24px] uppercase'>{title}</h5>
                <p className=' text-[#666666]'>{details}</p>
                <Link><img src={socialIcon} className=' w-[17px] h-[14px]' alt='' /></Link>
            </div>
        </div>
    );
};

export default OurTeamCard;