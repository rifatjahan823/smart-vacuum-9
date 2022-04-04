import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./Home.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useReview from '../../Hooks/useReview';
import HomeReviewDetails from '../HomeReviewDetails/HomeReviewDetails';
const Home = () => {
    const [reviews,setReviews]=useReview()
    let navigate = useNavigate();
    const ShowProductsDetails =()=>{
        const path=`/review`
        navigate(path)
    }
    return (
        <div>
           <div className="container">
                <div className="row mt-3 align-items-center gy-5 pb-3">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <h2> Wi-Fi Connected Robot Vacuum Cleaner</h2>
                         <p>Wi-Fi Convenience: The EufyHome app, and Amazon Alexa and the Google Assistant voice control-services let you accomplish your vacuuming needs with zero effort from you.Worry-Free Cleaning: The slim 2.85" body—upgraded to 1500Pa* suction—only cleans the areas you want.A Quiet Clean: Vacuums for up to 100 minutes** of constant, powerful suction at a volume no louder than an operating microwave.</p>
                         <button className='btn btn-danger text-capitalize'>live demo</button>
                      </div>
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <img className='w-75 float-end' src="https://m.media-amazon.com/images/I/7132iME3YHL._AC_SX679_.jpg" alt="" />
                     </div>
                 </div>
                 {/* Product review section start */}
                <div className=' product-review mt-5 pt-5'>
                <h2 className='text-center text-capitalize'>customer review-{reviews.slice(0,3).length}</h2>
                <div className='review mt-5'>
                        {
                        reviews.slice(0,3).map(review=><HomeReviewDetails
                       review={review} 
                       key={review.id}>
                        </HomeReviewDetails>)
                        }
                 </div>
                 <button  onClick={ShowProductsDetails } className='d-flex mx-auto mt-5 text-capitalize align-items-center'>
                    <p className=' me-2'> see more reviews</p>
                     <p> <FontAwesomeIcon icon={faArrowRight} /></p>
                 </button>
                </div>
            </div>
        </div>
    );
};

export default Home;