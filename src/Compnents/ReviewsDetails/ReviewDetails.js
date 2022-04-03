import React from 'react';
import"./ReviewDetails.css"

const ReviewDetails = ({review}) => {
    return (
        <div className='ReviewDetails border text-center p-3'>
            <img src={review.picture} alt="" />
            <p>{review.name}</p>
            <p>{review.description}</p>
        </div>
    );
};

export default ReviewDetails;