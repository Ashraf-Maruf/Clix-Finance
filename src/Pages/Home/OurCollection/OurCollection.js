import React from 'react';
import CollectionBgImg from '../../../Assets/img/collection-bg-img.png'
import OurCollectionCard from './OurCollectionCard';
import CollectionImg1 from '../../../Assets/img/collection-01.gif'
import CollectionImg2 from '../../../Assets/img/collection-03.gif'
import CollectionImg3 from '../../../Assets/img/collection-03.gif'
import CollectionImg4 from '../../../Assets/img/collection-04.gif'
import shape01 from '../../../Assets/shape/shape-img01.png'
import Pattern from '../../../Assets/img/pattern.png'
import Icon from '../../../Assets/social media icons/right-arrow.png'
import './OurCollection.css'
import { Link } from 'react-router-dom';
const OurCollection = () => {
    const collectionData = [
        {
            id: 1,
            img: CollectionImg1,
        },
        {
            id: 2,
            img: CollectionImg2,
        },
        {
            id: 3,
            img: CollectionImg3,
        },
        {
            id: 4,
            img: CollectionImg4,
        }
    ]
    return (
        <div className=' h-auto overflow-hidden hero mt-[-2px] collection-Bg' style={{ backgroundImage: `url(${CollectionBgImg})` }}>
            <div className='absolute top-[170px] left-0'>
                <img className='w-[400px]' src={shape01} alt='' />
            </div>
            <div className='absolute z-10  bottom-[-205px] ml-2'>
                <img className='w-[611px]' src={Pattern} alt='' />
            </div>
            <div className='w-11/12 mx-auto'>
                <div className=' flex justify-center mt-20 mb-8'>
                    <h3 className='Innovation-top-title text-white text-center relative z-10 mb-6 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>our</span> Collection</h3>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-10'>
                    {
                        collectionData.map(collection => <OurCollectionCard
                            key={collection.id}
                            collection={collection}
                        ></OurCollectionCard>)
                    }
                </div>

                <div className='flex justify-center relative z-[20px] pb-12'>
                    <Link to="" className=" pb-4 text-white mt-10 hover:bg-[#079E01] rounded-3xl w-48 flex justify-center items-center bg-[#079E01]">See all Collection<span className=' mt-1 ml-2'><img src={Icon} alt='' /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default OurCollection;