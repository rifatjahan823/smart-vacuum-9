import React from 'react';
import"./ReviewDetails.css"

const ReviewDetails = ({review}) => {
    return (
        <div className='ReviewDetails'>
            <img src={review.picture} alt="" />
            <p>{review.name}</p>
        </div>
    );
};

export default ReviewDetails;