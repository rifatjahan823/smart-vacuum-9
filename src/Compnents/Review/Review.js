import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewDetails from '../ReviewsDetails/ReviewDetails';
const Review = () => {
    const [reviews,setReviews]=useReview()
    return (
        <div>
           {
            reviews.map(review=><ReviewDetails
            review={review}
            key={review.is}>
            </ReviewDetails>)   
           }
        </div>
    );
};

export default Review;