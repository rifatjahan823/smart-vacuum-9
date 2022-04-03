import React from 'react';
import'./Review.css'
import useReview from '../../Hooks/useReview';
import ReviewDetails from '../ReviewsDetails/ReviewDetails';
const Review = () => {
    const [reviews,setReviews]=useReview()
    return (
       <div className='container'>
            <div className='Review mt-5'>
           {
            reviews.map(review=><ReviewDetails
            review={review}
            key={review.is}>
            </ReviewDetails>)   
           }
        </div>
       </div>
    );
};

export default Review;