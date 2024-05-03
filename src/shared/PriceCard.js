import React from 'react'
import StarRating from '../shared/StarRating'
import { Link } from 'react-router-dom';

const PriceCard = (items) => {
  const item=items.items;
  return (
    <div>
    <div className="card shadow" style={{borderRadius:"3rem" }}>
    <div className="shop_item home7_style small_style bdrtrb1 px-2 px-sm-3  ">
        <div className="thumb pb30 "><img src={item.image}
                alt="Recent Products"/>
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
            <div className="sub_title">{item.product}</div>
            <div className="title"><Link style={{textDecoration:"none"}}   to="#">{item.name}</Link></div>
            <div className="review d-flex db-400">
                <StarRating/>
                <div className="review_count " style={{paddingLeft:"1rem"}} ><Link style={{textDecoration:"none",color:"gray"}}   to="#">3,014 reviews</Link></div>
            </div>
            <div className="si_footer">
                <div className="price">${item.price}<small><del>${item.discount}</del></small></div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default PriceCard
