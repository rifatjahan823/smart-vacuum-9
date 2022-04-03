import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./Home.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
                <div className="row mt-5 align-items-center gy-5">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <h2>your next phone your next phone your next phone</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate voluptates voluptatum aliquam necessitatibus sequi autem facilis quae! Velit dignissimos obcaecati consectetur praesentium aperiam ut nulla neque impedit expedita ducimus.</p>
                         <button className='btn btn-danger'>live demo</button>
                      </div>
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <img className='w-75 float-end' src="https://m.media-amazon.com/images/I/7132iME3YHL._AC_SX679_.jpg" alt="" />
                     </div>
                 </div>
                 {/* Product review section start */}
                <div className=' product-review mt-5'>
                <h2 className='text-center'>customer review{reviews.slice(0,3).length}</h2>
                <div className="row row-cols-lg-3 row-cols-md-6 row-cols-sm-12">
                        {
                        reviews.slice(0,3).map(review=><HomeReviewDetails
                       review={review} 
                       key={review.id}>
                        </HomeReviewDetails>)
                        }
                 </div>
                 <button  onClick={ShowProductsDetails } className='d-flex mx-auto mt-5 '>
                    <p> see more</p>
                     <p> element <FontAwesomeIcon icon={faCoffee} /></p>
                 </button>
                </div>
            </div>
        </div>
    );
};

export default Home;