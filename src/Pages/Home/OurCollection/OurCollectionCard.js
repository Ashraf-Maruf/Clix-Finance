import React from 'react';

const OurCollectionCard = ({ collection }) => {
    const { img } = collection
    return (
        <div className="card">
            <img className='  h-96' src={img} alt="Shoes" />
        </div>
    );
};

export default OurCollectionCard;