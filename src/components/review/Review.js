import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Review = () => {
    const [rating, setRating] = useState(3); // Initial rating value

    const handleStarClick = (value) => {
        // Toggle rating between 0 and value if clicked again
        const newRating = value === rating ? 0 : value;
        setRating(newRating);
    };
  return (
    <div>
    <section>
    <div className="container">
    <div className="row d-flex justify-content-center align-items-center my-3" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - Shop - Add to Cart</div>
        <div className="row">
            <div className="col-lg-8 col-12 mb-md-0 mb-4 track">
                <div className="card shadow p-4 customtouch">
                    <h4 className="heading">Write a Review</h4>
                    <h6 className='mt-1'>Rate the Product</h6>
                    <div className='mb-3 mt-1'>
                    {[...Array(5)].map((_, index) => {
                        const value = index + 1;
                        return (
                            <FaStar
                                key={value}
                                onClick={() => handleStarClick(value)}
                                color={value <= rating ? "#ffc107" : "#e4e5e9"}
                                size={30}
                                style={{ cursor: "pointer",width:"2rem",marginRight:"7px"  }}
                            />
                        );
                    })}
                    
                    
                </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-12 mb-3 tracko">
                            <h5 className="input-heading">Your Name *</h5>
                            <input type="text" className="form-control" placeholder="Name"/>

                        </div>
                        <div className="col-md-6 col-12 mb-3 tracko">
                            <h5>Email Address *</h5>
                            <input type="text" className="form-control" placeholder="Email"/>

                        </div>
                        
                        
                    </div>


                    
                    

                    
                    <div className="row mt-3">
                        <div className="col-12 mb-3 tracko">
                            <h5 className="input-heading">Message *</h5>
                            
                            <textarea name="" className='form-control' id="" cols="30" rows="4" placeholder='Name'></textarea>

                        </div> 
                        
                        
                    </div>


                    <div className="row d-flex mb-3">
                    
                    <div className="d-flex">
                    <Link to="" className="btn banner-btn btnn-thm1111  px-lg-4 py-lg-2 px-sm-2 py-sm-1 me-3">Submit</Link>
                
                    <Link to="" className="btn banner-btn btnnn-thm1111  px-lg-4 py-lg-2 px-sm-2 py-sm-1">Cancel</Link>
                </div>
                    </div>
                    </div>
            </div>
            <div className='col-lg-4 col-12  mt-3'>
            <div className="card p-4 shadow" style={{borderRadius:"22px" }}>
            <div className=' mb-md-4 mb-2 customaddressdiv'>
                <h2>How to write a review</h2>
                <p className='p-0 m-0' style={{color:"#777777"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <ol style={{color:"#777777", listStyle:"auto"}}>
    <li className='mb-2'>  Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Ut enim ad minim veniam, quis </li>
    <li className='mb-2'>  Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Ut enim ad minim veniam, quis </li>
    <li className='mb-2'>  Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Ut enim ad minim veniam, quis </li>
    <li className='mb-2'>  Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Ut enim ad minim veniam, quis </li>
    
</ol>

            
        </div>
        
            
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Review
