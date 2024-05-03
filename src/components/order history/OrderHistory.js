import React, { useState } from 'react'
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'
import shoes from "../../assets/img/pngwing 13.png"

const OrderHistory = () => {
    const items = [
        {id:"1",date:"12, jan, 2024",image:`${shoes}`,color:"gray",size:"10.5",name:"Wear Saka Store",quantity:"4",price:"567.00"},
        {id:"2",date:"12, jan, 2024",image:`${shoes}`,color:"gray",size:"10.5",name:"Wear Saka Store",quantity:"4",price:"567.00"}

    ]
    const [cancelButtonState, setCancelButtonState] = useState({});
    const toggleCancelButton = (itemId) => {
        setCancelButtonState(prevState => {
            const updatedState = { ...prevState };

            // Close all other buttons
            Object.keys(updatedState).forEach(key => {
                updatedState[key] = false;
            });

            // Toggle the button for the current item
            updatedState[itemId] = !prevState[itemId];
            return updatedState;
        });
    };


  return (
    <div>
    <Navbar/>
<div className="row d-flex justify-content-center align-items-center" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - Shop - Orders</div>

    <section className="our-dashbord dashbord p-0 mt-3">

    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="account_user_deails pl40-md pl0 pl0-md">
                    <div className="ui_kit_tab style2">
                        <ul className="nav nav-tabs mb15 customorder" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="t20-tab" data-bs-toggle="tab"
                                    data-bs-target="#t20" type="button" role="tab" aria-controls="t20"
                                    aria-selected="true">Active orders</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="baby-tab" data-bs-toggle="tab"
                                    data-bs-target="#baby" type="button" role="tab" aria-controls="baby"
                                    aria-selected="false">Completed orders</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="furniture-tab" data-bs-toggle="tab"
                                    data-bs-target="#furniture" type="button" role="tab"
                                    aria-controls="furniture" aria-selected="false">Cancelled orders</button>
                            </li>
                        </ul>
                        <div className="tab-content pt20 row" id="myTabContent">
                            <div className="tab-pane fade show active col-lg-12" id="t20" role="tabpanel"
                                aria-labelledby="t20-tab">
                                <div className="account_details_page form_grid">
                                {items.map(item => (
                                    <div className="card shadow active mb-3 me-0 p-4" style={{border: cancelButtonState[item.id] ? "1px solid #f70000" : "1px solid #Fff", borderRadius: "22px"}} key={item.id}>
                                        <div className="d-flex justify-content-between align-items-center customcolumn1 mb-2">
                                            <p style={{border: "1px solid gray", padding: "5px 20px", borderRadius: "777px"}} className='mb-0'>
                                                <i className="fa-solid fa-bag-shopping me-2"></i> Yesterday, {item.date}
                                            </p>
                                            <div className='customcolumn11'>
                                            {cancelButtonState[item.id] && (
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn me-3 customcolumn11btn" style={{color: "#F70000", background: "none "}}>
                                                    <i className="fa-solid fa-trash-can"></i> Cancel Order
                                                </button>
                                            )}
                                                <i className="fa-solid fa-ellipsis-vertical" onClick={() => toggleCancelButton(item.id)}></i>
                                            </div>
                                        </div>
                    
                                        <div className="active-order-card customcolumn customcolumnimg">
                                            <div>
                                                <ul  className="cart_list d-block d-md-flex align-items-center justify-content-center customcolumn p-0">
                                                    <li className="ps-md-3 ps-0 active-order-card-img  pe-1">
                                                    <img src={item.image} alt="product img"  className="product-img"/>
                                                        
                                                    </li>
                                                    <li className="ms-0 ms-md-3">
                                                        <a className="cart_title" href="#">
                                                            <h3 className="fz16">{item.name}</h3>
                                                            <p className=" ">Color: {item.color}</p>
                                                            <p className="fz14">Size {item.size} UK</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> 
                    
                                            <h4 style={{color: "#777"}}>Quantity {item.quantity}</h4>
                                            <h4 style={{color: "#777"}}>Price: ${item.price}</h4> 
                    
                                            <span style={{color: "#07D459", background: "#f0fff6", border: "1px dashed #07D459", padding: "10px 20px", borderRadius: "15px"}}>
                                                In Progress
                                            </span>
                                            
                                            {/* Cancel Order Button */}
                                           
                                        </div>
                                    </div>
                                ))}
                                   
                                </div>
                            </div>
                            <div className="tab-pane fade col-xl-12" id="baby" role="tabpanel"
                                aria-labelledby="baby-tab">
                                <div className="account_details_page form_grid">
                                {items.map(item => (

                                    <div className="card shadow mb-3 p-4 me-0" style={{border: cancelButtonState[item.id] ? "1px solid #f70000" : "1px solid #Fff",borderRadius: "22px"}} key={item.id}>
                                        <div className="d-flex justify-content-between align-items-center customcolumn1">
                                            <p
                                                style={{border: "1px solid gray", padding: "5px 20px", borderRadius: "777px"}}>
                                                <i className="fa-solid fa-bag-shopping me-2"></i> Yesterday, 12
                                                jan, 2024</p>
                                           {/* <p><i className="fa-solid fa-ellipsis-vertical"></i></p>*/}
                                        </div>


                                        <div className=" active-order-card customcolumn customcolumnimg">

                                            <div>
                                                <ul className="cart_list d-block d-md-flex align-items-center justify-content-center customcolumn p-0">


                                                    <li className="ps-md-3 ps-0 active-order-card-img  pe-1 "><a href="#"><img
                                                                src={shoes} alt="cart1.png"
                                                                className="product-img"/></a></li>
                                                    <li className="ms-0 ms-md-3">
                                                        <a className="cart_title" href="#">
                                                            <h3 className="fz16">Wear Saka Store</h3>
                                                            <p className=" ">Color: Grey</p>
                                                            <p className="fz14">Size 10.5 UK</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h4 style={{color: "#777"}}>Quantity 4</h4>
                                            <h4 style={{color: "#777"}}>Price: $567.00</h4>
                                            <div className="complete-btn customcolumn">
                                                <span className="me-3"
                                                    style={{color: "#07D459", background: "#f0fff6", border: "1px dashed #07D459", padding: "10px 20px", borderRadius: "15px"}}>Completed</span>
                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#reviewmodal" className="btn  "
                                                        style={{color: "#F69B26", background: "#fefaf4", border: "1px dashed #F69B26", padding: "10px 20px", borderRadius: "15px"}}>Leave Review</button>

                                            </div>

                                        </div>
                                    </div>
                                ))}

                                </div>
                            </div>
                            <div className="tab-pane fade col-xl-12" id="furniture" role="tabpanel"
                                aria-labelledby="furniture-tab">
                                <div className="account_details_page  form_grid">
                                {items.map(item => (
                                    
                                    <div className="card shadow mb-3 p-4 me-0" style={{border: cancelButtonState[item.id] ? "1px solid #f70000" : "1px solid #Fff",borderRadius: "22px"}} key={item.id}>
                                        <div className="d-flex justify-content-between align-items-center customcolumn1">
                                            <p
                                                style={{border: "1px solid gray", padding: "5px 20px", borderRadius: "777px"}}>
                                                <i className="fa-solid fa-bag-shopping me-2"></i> Yesterday, 12
                                                jan, 2024</p>
                                             {/* <p><i className="fa-solid fa-ellipsis-vertical"></i></p>*/}

                                        </div>


                                        <div className=" active-order-card customcolumn customcolumnimg">

                                            <div>
                                                <ul className="cart_list d-block d-md-flex align-items-center justify-content-center customcolumn p-0">


                                                    <li className="ps-md-3 ps-0 active-order-card-img  pe-1  "><a href="#"><img
                                                                src={shoes} alt="cart1.png"
                                                                className="product-img"/></a></li>
                                                    <li className="ms-0 ms-md-3">
                                                        <a className="cart_title" href="#">
                                                            <h3 className="fz16">Wear Saka Store</h3>
                                                            <p className=" ">Color: Grey</p>
                                                            <p className="fz14">Size 10.5 UK</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h4 style={{color: "#777"}}>Quantity 4</h4>
                                            <h4 style={{color: "#777"}}>Price: $567.00</h4>
                                            <div className='mt-3 mt-md-0'>
                                                <span className="me-md-3 me-0"
                                                    style={{color: "#F70000", background: "#fae5e5", border: "1px dashed #F70000", padding: "10px 20px", borderRadius: "15px"}}>Cancelled</span>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                                    
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <Footer/>
      
    </div>
  )
}

export default OrderHistory
