import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'./HomeReviewDetails.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HomeReviewDetails = ({review}) => {
    return (
        <div className=' border px-5 py-2 text-center HomeReviewDetails'>
            <img src={review.picture} alt="" />
            <p>{review.name}</p>
            <p>Rating:{review.rating}*</p>
            <p>{review.description}</p>
        </div>
    );
};

export default HomeReviewDetails;