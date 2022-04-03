import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./Home.css'
const Home = () => {
    let navigate = useNavigate();
    const ShowProductsDetails =()=>{
        const path=`/review`
        navigate(path)
    }
    return (
        <div>
           <div class="container">
                <div className="row mt-5 align-items-center gy-5">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <h2>your next phone your next phone your next phone</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate voluptates voluptatum aliquam necessitatibus sequi autem facilis quae! Velit dignissimos obcaecati consectetur praesentium aperiam ut nulla neque impedit expedita ducimus.</p>
                         <button>live demo</button>
                      </div>
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <img className='w-75 float-end' src="https://m.media-amazon.com/images/I/7132iME3YHL._AC_SX679_.jpg" alt="" />
                     </div>
                 </div>
                <div className='mt-5'>
                <h2 className='text-center'>customer review</h2>
                 <div class="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        One of two columns
                    </div>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                     One of two columns
                    </div>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                     One of two columns
                    </div>
                 </div>
                 <button  onClick={ShowProductsDetails } className='d-flex mx-auto mt-5'>
                    <p> see more</p>
                     <p>x</p>
                 </button>
                </div>
            </div>
        </div>
    );
};

export default Home;