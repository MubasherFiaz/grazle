import React from "react";
import { Dropdown } from "react-bootstrap";
import pngwing from "../../assets/image/pngwing 1.png";
import tick from "../../assets/image/tick.png";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const CompleteOrder = () => {
  const items = [
    {
      id: "1",
      color: "Light Brown",
      name: "Wingback Chair",
      price: "999.5",
      date: "12 jan, 2024",
      quantity: "3",
      image: pngwing,
    },
    {
      id: "5",
      color: "Light Brown",
      name: "Wingback Chair",
      price: "999.5",
      date: "12 jan, 2024",
      quantity: "3",
      image: pngwing,
    },
  ];
  return (
    <div>
    <Navbar/>
      <section class="our-dashbord dashbord" style={{ padding: "0" }}>
        <div class="container py-3">
          <div
            className="row my-3 d-none d-lg-block"
            style={{
              width: "100%",
              backgroundColor: "#F8F8F8",
              color: "#909198",
              height: "40px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mt-2 ">
              <p>© 2020 Landify UI Kit. All rights reserved</p>
              <p>Terms & Conditions | Privacy Policy | Sitemap | Disclaimer</p>
            </div>
          </div>
          <div class="row">
            <div className="text-center my-4 customconfim">
              <img
                src={tick}
                alt=""
                style={{ width: "15rem", height: "9rem" }}
              />
              <h3 style={{ color: "#434343", fontSize: "48px" }}>
                Your Order is Completed!
              </h3>
              <p style={{ color: "#434343" }}>
                Thank you. Your order has been recived.
              </p>
            </div>
            <div class="row">
            <div class="col-12">
              <div
                class="row card shadow p-0 mb-3"
                style={{ borderRadius: "15px" }}
              >
                <div
                  class="shopping_cart_table table-responsive p-0"
                  style={{ borderRadius: "15px" }}
                >
                  <table
                    className="table table-borderless m-0"
                    style={{ border: "none" }}
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col "
                          style={{
                            borderRadius: "15px 0px 0px 15px",
                            backgroundColor: "orange",
                            textAlign: "left",
                          }} className="thead"
                        >
                          {" "}
                          <span style={{color:"#777777"}}>Order ID</span> <br /> #SHGH5577HHH{" "}
                        </th>
                        <th
                          scope="col "
                          style={{ background: "orange", textAlign: "left" }} className="thead"
                        >
                          {" "}
                          <span style={{color:"#777777"}}>Payment Method</span> <br /> PayPal
                        </th>
                        <th
                          scope="col "
                          style={{ background: "orange", textAlign: "left" }} className="thead"
                        >
                          {" "}
                          <span style={{color:"#777777"}}>Transacton ID</span> <br /> TR67777SSE
                        </th>
                        <th
                          scope="col "
                          style={{
                            backgroundColor: "orange",
                            textAlign: "left" }} className="thead"
                          
                        >
                          {" "}
                          <span style={{color:"#777777"}}>Estimated Delivery Date</span> <br />{" "}
                          24 April 2024
                        </th>
                        <th
                        scope="col "
                        style={{
                          borderRadius: "0px 15px 15px 0px",
                          backgroundColor: "orange",
                          textAlign: "left" }} className="thead"
                        
                      >
                       <button className="btn btn-thm1111">Download Invoice</button>
                      </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div
                className="row card shadow p-0 pt-4 mb-3 border"
                style={{ borderRadius: "15px" }}
              >
              <h3 className="ms-4 mb-2">Order Details</h3>
              <div className="d-flex justify-content-center">
                        <hr style={{ width: "95%" }} />
                      </div>

              <div
                          className="cart_list d-block d-flex align-items-center justify-content-between mt-3 mb-4 px-4"
                          style={{ width: "100%" }}
                        >
                        <h5 className="ms-4">Products</h5>
                        <h5>Sub Total</h5>
                        
                        </div>
                        <table>
                        
                        <tbody>
                        {items.map(item=>(
                
                        <tr  key={item.id} style={{borderBottom: "1px solid #777"}} className="px-5">
                        <td>
                         
                        <div
                        className="cart_list d-block d-flex align-items-center justify-content-between my-3  px-3 customcolumn"
                        style={{ width: "100%" }}
                      >
                        <div className="d-flex align-items-center customcolumn ">
                          <div className="ps-3 pe-1">
                            <a href="#">
                              <img
                                src={item.image}
                                alt="cart1.png"
                                className="product-img1111"
                              />
                            </a>
                          </div>
                          <div className="ms-2 ms-md-3">
                            <div className="cart_title text-black customcolumn">
                              <h3 className="fz16">{item.name} </h3>
                              <h5 className=""> Color - {item.color} </h5>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5>${item.price}</h5>
                        </div>
                      </div>
                            
                             
                
                
                        </td>
                        
                        </tr>
                        
                    ))}
                        </tbody>
                        </table>
               
                <h3 className="ms-4 my-4">Shipping</h3>
                <div
                          className="cart_list d-block d-flex align-items-center justify-content-between my-1 px-4"
                          style={{ width: "100%" }}
                        >
                        <h5 className="ms-4">Taxes</h5>
                        <h5>$678.00</h5>
                        
                        </div>
                        <div
                          className="cart_list d-block d-flex align-items-center justify-content-between my-1 px-4"
                          style={{ width: "100%" }}
                        >
                        <h5 className="ms-4">Coupen Discount</h5>
                        <h5>$678.00</h5>
                        
                        </div>
                        <div className="d-flex justify-content-center">
                        <hr style={{ width: "95%" }} />
                      </div>
                        <div
                          className="cart_list d-block d-flex align-items-center justify-content-between my-1 mb-5 px-4"
                          style={{ width: "100%" }}
                        >
                        <h5 className="ms-4">Total</h5>
                        <h5>$678.00</h5>
                        
                        </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CompleteOrder;
