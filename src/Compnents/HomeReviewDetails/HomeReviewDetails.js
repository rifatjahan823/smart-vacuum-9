import React from 'react';
import'./HomeReviewDetails.css'

const HomeReviewDetails = ({review}) => {
    return (
        <div className=' border px-5 py-2 text-center HomeReviewDetails'>
            <img src={review.picture} alt="" />
            <p>{review.name}</p>
            <p>{review.description}</p>
        </div>
    );
};

export default HomeReviewDetails;