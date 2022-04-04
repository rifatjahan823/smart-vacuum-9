import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import"./ReviewDetails.css"
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewDetails = ({review}) => {
    return (
        <div className='ReviewDetails border text-center p-3'>
            <img src={review.picture} alt="" />
            <p>{review.name}</p>
            <p>Rating:{review.rating} <FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} /></p>
            <p>{review.description}</p>
        </div>
    );
};

export default ReviewDetails;