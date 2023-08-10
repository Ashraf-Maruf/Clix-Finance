import React from 'react';
import './OurRoadmap.css'
const OurRoadmap = () => {
    return (
        <div className=' h-auto mt-[-3px] py-14 roadmapBg'>
            <div className='w-11/12 mx-auto'>
                <div className=' flex justify-center'>
                    <h3 className='roadmap-top-title text-white text-center relative z-10 mb-10 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>our</span> Roadmap</h3>
                </div>
                <div className=' z-[20px] relative'>
                    <div className=' flex flex-wrap justify-center md:gap-[30px] xl:gap-[130px] 2xl:gap-[210px] 3xl:gap-[210px]'>
                        <div>
                            <h4 className=' text-area-shape text-center text-white opacity-80 font-manrope font-extrabold uppercase text-[28px]'>Phase-1</h4>
                            <div className=' bg-white shapeA p-4 rounded-xl w-[320px] h-[160px]'>
                                <ol>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Discovery & Concept</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Social Engagement</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Launch Website</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Whitelist Minting</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Public Minting</li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <h4 className=' text-center text-white opacity-80 font-manrope font-extrabold uppercase text-[28px]'>Phase-3</h4>
                            <div className='  bg-white shapeA p-4 rounded-xl w-[320px] h-[125px]'>
                                <ol>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Partnership with Artist</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>DAO Protocols</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Partnership with Green Initiatives</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Grow Team</li>
                                </ol>
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h4 className=' text-center text-white opacity-80 font-manrope font-extrabold uppercase text-[28px]'>Phase-5</h4>
                            <div className='shapeA  bg-white shapeA p-4 rounded-xl w-[320px] h-[200px]'>
                                <ol>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Bridges
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Entering Metaverse</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Partnership with Blue Chip projects
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Grow Ecosystem
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Global adoption campaign
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Team Growth
                                    </li>
                                    <li className=' flex items-center'>New Roadmap announced</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="border-area flex text-white gap-10 sm:gap-24 md:gap-[115px] xl:gap-[230px] 2xl:gap-[275px] 3xl:gap-[275px] justify-center my-8">
                        <div className='shape1'></div>
                        <div className='shape1'></div>
                        <div className='shape1'></div>
                        <div className='shape1'></div>
                        <div className='shape1'></div>
                    </div>
                    <div className=' flex flex-wrap justify-center md:gap-[20px] 2xl:gap-48 3xl:gap-48'>
                        <div className='ml-3'>
                            <h4 className=' text-center text-white opacity-80 font-manrope font-extrabold uppercase text-[28px]'>Phase-2</h4>
                            <div className='shapeA  bg-white p-4 rounded-xl w-[320px] h-[200px]'>
                                <ol>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Whitepaper & Concept</li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Exclusive NFT Drop
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Private Sale of Hyper-Deflationary $CLIX Token for members
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Merch Store for public with exclusive items for members
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Team Growth</li>
                                </ol>
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h4 className=' text-center text-white opacity-80 font-manrope font-extrabold uppercase text-[28px]'>Phase-4</h4>
                            <div className=' shapeA bg-white p-4 rounded-xl w-[320px] h-[160px]'>
                                <ol>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Launch Lending Protocols
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Tier 1 Passive Income Protocol for members
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Premium NFT AirDrop
                                    </li>
                                    <li className=' flex items-center'><span className='shape mr-2'></span>Team Growth
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRoadmap;