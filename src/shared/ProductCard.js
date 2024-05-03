
import React from 'react'
import StarRating from '../shared/StarRating'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = (items) => {
  const item=items.items;
  return (
    <div >
    <div className="card shadow" style={{borderRadius:"3rem" }}>
    <div className="shop_item home7_style small_style bdrtrb1 px-2 px-sm-3  ">
        <div className="thumb pb30 "><img src={item.image}
                alt="Recent Products" className='customimgcard'/>
            <div className="thumb_info home6_style gray_style">
                <ul className="mb0">
                    <li><Link style={{textDecoration:"none"}}   to="#"><span
                                className="flaticon-heart"></span></Link></li>
                    <li><Link style={{textDecoration:"none"}}   to="#"><span
                                className="flaticon-show"></span></Link></li>
                    <li><Link style={{textDecoration:"none"}}   to="#"><span
                                className="flaticon-graph"></span></Link></li>
                </ul>
            </div>
            <div className="shop_item_cart_btn d-grid"><Link style={{textDecoration:"none"}}   to="#"
                    className="btn btn-light-green">Add to Cart</Link></div>
        </div>
        <div className="details">
            <div className="title"><Link style={{textDecoration:"none"}}   to="#">{item.name}</Link></div>
            <div className="review d-flex db-400">
            </div>
            <div className="si_footer">
                  <div className='d-flex '> <p className='mt-1' style={{color:"#ffc107"}} >4.8 (342) </p><FaStar
                  
                  size={30}
                  style={{ cursor: "pointer",width:"1rem",color:"#ffc107",marginLeft:"3px"  }}
              />  </div>
                <div className="price"> <h4 style={{fontWeight:'600'}}>${item.price}</h4></div>
                <div className='mt-3'>
                <small style={{fontSize:"18px",fontWeight:"700"}}><del style={{color:"gray"}}>${item.discount} </del> <span className='ms-2' style={{color:"green"}}>20% Off</span> </small>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ProductCard
