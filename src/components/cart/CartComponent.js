import React, { useState } from 'react';
import object from "../../assets/image/Rectangle 1951.png";

const CartComponent = () => {
    const items = [
        { id: "1", name:"Wear Saka Store", price:"345.000", discount:"345.000" , image: object},
        { id: "2", name:"Wear Saka Store", price:"345.000", discount:"345.000" , image: object },
        { id: "3", name:"Wear Saka Store", price:"345.000", discount:"345.000" , image: object },
        { id: "4", name:"Wear Saka Store", price:"345.000", discount:"345.000" , image: object },
        { id: "5", name:"Wear Saka Store", price:"345.000", discount:"345.000" , image: object }
    ];
    const [quantity, setQuantity] = useState(1)
    const handleminus=()=>{
      if(quantity>1){
        setQuantity(quantity-1);

      }
     
    }
    const handleplus=()=>{
        setQuantity(quantity+1);

     
    }
     
  return (
    <div>
      <div className="body_content_wrapper position-relative mt-2">
        <div
          style={{
            width: '100%',
            height: '100%',
            paddingTop: '8px',
            paddingBottom: '8px',
            background: '#F8F8F8',
            borderRadius: '5px',
            borderTop: '1px rgba(0, 0, 0, 0.10) solid',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex'
          }}
        >
          <div style={{ width: '180px' }}>
            <span
              style={{
                color: '#909198',
                fontSize: '14px',
                fontFamily: 'Manrope',
                fontWeight: '400',
                textDecoration: 'none',
                lineHeight: '24px',
                wordWrap: 'break-word'
              }}
              className="home"
            >
              Home
            </span>
            <span
              style={{
                color: '#909198',
                fontSize: '14px',
                fontFamily: 'Manrope',
                fontWeight: '400',
                lineHeight: '24px',
                wordWrap: 'break-word'
              }}
              className="shop"
            >
              
              - Shop - Add to Cart
            </span>
          </div>
        </div>
      </div>
      <section className="shop-cart pt30">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <h3 style={{ fontSize: '30px', fontWeight: '500' }} className="me-5">Cart</h3>
              <p style={{ fontSize: '14px', fontWeight: '400' }} >(3 Products)</p>
            </div>
          </div>
          <div className="row mt15">
            <div className="col-lg-8 col-xl-9 cart-items">
              <div >
                {items.map(item=>(
                    <div key={item.id} className="card px-4 mb-4 py-3 shadow cart-card">
                    <div className="card-header d-flex ">
                  <h4 className="mb-0">{item.name}</h4>
                </div>
                <div className="card-body">
                  <div className=" mb-5 d-flex justify-content-between add-more-div">
                    <h6 className="mb-0 " style={{color:"#777777"}}>Add More Products</h6>
                    <h6 className="mb-0 add-txt"><i className="fa-solid fa-plus"></i> Add</h6>
                  </div>
                  <div className="d-flex justify-content-between customcolumn">
                    <div className="d-flex cart-check customcolumn">
                      <label className="custom_checkbox mt-4 d-none d-md-block"> 
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <img src={item.image} alt="" className="me-md-4" />
                      <div className='customcart'>
                        <h4>{item.name}</h4>
                        <p><span className="badge badge-danger badge-soft me-2" style={{color:"#F70000"}} >10%</span><del>Rs {item.discount}</del></p>
                        <h5 style={{fontSize:"18px"}}>Rs {item.price}</h5>
                      </div>
                    </div>
                    <div className='customrow mt-2 mt-md-0'>
                      <div className="cart_btn home_page_sidebar d-grid">
                        <div className="quantity-block home_page_sidebar border">
                          <button className="quantity-arrow-minus2 shop_single_page_sidebar" onClick={handleminus}>
                          <i  className="fa-solid fa-minus"></i>
                          </button>
                          <input className="quantity-num2 shop_single_page_sidebar" type="number" value={quantity} />
                          <button className="quantity-arrow-plus2 shop_single_page_sidebar" onClick={handleplus}> <i className="fa-solid fa-plus"></i> </button>
                        </div>
                      </div>
                      <div className="icon-div icondiv float-end me-md-4 me-1 mt-md-4">
                        <i className="fa-solid fa-pen-to-square edit me-3"></i>
                        <i className="fa-solid fa-trash-can del"></i>
                      </div>
                    </div>
                  </div>
                </div>
                    </div>
  ))}
              </div>
              {/* More card elements */}
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="order_sidebar_widget style2 shadow" style={{ border: 'none', borderRadius: '15px' }}>
                <h4 className="title">Promo Code</h4>
                <div className="search"> 
                  <input type="text" className="form-control" placeholder="Type Here" />
                  <button>Apply</button>
                </div>
                <hr />
                <h4 className="title">Cart Total</h4>
                <ul>
                  <li className="subtitle">
                    <p>Shipping<span className="float-end">Free</span></p>
                  </li>
                  <li className="subtitle">
                    <p>Discount<span className="float-end">$66.00</span></p>
                  </li>
                  <li className="subtitle">
                    <p>Cart Total<span className="float-end">$66.00</span></p>
                  </li>
                </ul>
                <div className="ui_kit_button payment_widget_btn">
                  <button type="button" className="btn btn-thm btn-block">Continue Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;
