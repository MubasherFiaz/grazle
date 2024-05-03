import React from "react";
import pngwing from "../../assets/image/pngwing 1.png"
import { Link } from "react-router-dom";
const Wishlist = () => {
    const items = [
        { id: "1", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"3" , image: pngwing},
        { id: "2", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"0" , image: pngwing },
        { id: "3", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"3" , image: pngwing },
        { id: "4", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"0" , image: pngwing },
        { id: "5", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"3" , image: pngwing }
    ];
  return (
    <div>
    <section class="shop-cart pt30">
    <div class="container">

    <div className="row">
    <div className="col-12 d-flex align-items-center">
      <h3 style={{ fontSize: "30px", fontWeight: 500 }} className="me-5">Wishlist</h3>
      <p style={{ fontSize: "14px", fontWeight: 400 }}> (3 Products) </p>
    </div>
  </div>
  

        <div class="row mt15">
            <div class="col-lg-12 col-xl-12">
                <div class="shopping_cart_table table-responsive">
                <table className="table table-borderless" style={{ border: "none" }}>
                <thead>
                    <tr >
                        <th scope="col" style={{ borderRadius: "10px 0px 0px 10px",backgroundColor:"orange" }}>PRODUCT</th>
                        <th scope="col" style={{ background: "orange" }}>PRICE</th>
                        <th scope="col" style={{ background: "orange" }}>Date Added</th>
                        <th scope="col" style={{ background: "orange" }}>Stock Status</th>
                        <th scope="col"  style={{ borderRadius: "0px 10px 10px 0px",backgroundColor:"orange" }}>REMOVE</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    {items.map(item=>(
                        <tr key={item.id}>
                        <th scope="row">
                            <ul className="cart_list d-block d-xl-flex align-items-center">
                                <li className="ps-1 ps-sm-4 pe-1 my-auto"><span className="flaticon-close"></span></li>
            
                                <li className="ps-3 pe-1"><a href="#"><img
                                            src={item.image} alt="cart1.png" className="product-img1111" /></a></li>
                                <li className="ms-2 ms-md-3">
                                    <div className="cart_title text-black">
                                        <h3 className="fz16">{item.name}  </h3>
                                        <h5 className="fz14"> Color - {item.color} </h5>
                                    </div>
                                </li>
                            </ul>
                        </th>
                        <td>${item.price}</td>
                        <td>{item.date} </td>
                        <td>
                        {item.quantity>0 ?   <span className="stock-txt1111">In Stock</span>  :  <span class="out-stock-txt1111">Out of Stock</span>}
                        
                        </td>
                        <td className=""><a href="" className="btn banner-btn btn-thm1111">Shop Now</a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            
                </div>
            </div> 
        </div>
       
        <div class="checkout_form mt30">
            <div class="row align-items-center">
                <div class="col-4 link">
                    <form class="    mb10-lg d-flex align-items-center">
                        <Link class="btn w-100 text-start" to="#">Wishlist Link:</Link>

                        <input class="form-control   " type="search"
                            placeholder="www.example.com" aria-label="Search"/>
                    </form>
                </div>
                <div class="col-8 text-end">
                    <button type="button" class="btn btn_shopping btn-white me-3">Clear Wishlsit:</button>
                    <button type="button" class="btn btn_cart btn3 btn-thm1111">Add All to Cart</button>
                </div>
            </div>
            
        </div>
    </div>
</section>
    </div>
  );
};

export default Wishlist;
