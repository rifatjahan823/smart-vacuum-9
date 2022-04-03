import React from 'react';

const Home = () => {
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
                 <h2 className='text-center'>customer review</h2>
                 <div class="row justify-content-evenly">
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
            </div>
        </div>
    );
};

export default Home;