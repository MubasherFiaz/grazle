import React from 'react'
import ToggleSideBar from '../../shared/ToggleSideBar'
import UserSiderBAr from '../../shared/UserSiderBAr'
import { Dropdown } from "react-bootstrap";
import pngwing from "../../assets/image/pngwing 1.png"
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import { MdBorderBottom } from 'react-icons/md';


const Order = () => {
    const items = [
        { id: "1", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"3" , image: pngwing},
        { id: "5", color: "Light Brown", name:"Wingback Chair", price:"999.5",date:"12 jan, 2024", quantity:"3" , image: pngwing }
    ];
  return (
    <div>
    <Navbar/>
    <section class="our-dashbord dashbord" style={{padding:"0"}}>
    <div class="container py-3">
    <div className="row d-flex justify-content-center align-items-center my-3" style={{width:"100%", backgroundColor:"#F8F8F8",color:"#909198",height:"40px"}}>Home - My Account</div>
        <div class="row">
            <div class="col-lg-3 d-none d-lg-block" >
                <UserSiderBAr/>
            </div>
            <div class="col-lg-9">
              
                <div class="row">
                    <div class="col-xl-12">
                          <ToggleSideBar/>
                       
                    </div>

                </div>
                <div className="col-12 d-flex justify-content-between " style={{color:"#777777"}}>
        <h5>Orders (2)</h5>
        <div className="d-flex">
         <p className='mx-4 mt-2' style={{fontSize:"18px"}}>Sort by: </p>
         <Dropdown >
                            <Dropdown.Toggle
                              id="dropdown-basic"
                              
                              style={{
                                backgroundColor: "transparent",
                                color: "#777777",
                                height:"42px",
                                border:" 1px solid #777777",
                                borderRadius:"66px",
                                width:"95px",
                                display:"flex",
                                justifyContent:"space-around",
                                alignItems:"center",
                                
                              }}
                            >
                              All
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action 1
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Action 2
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Action 3
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
        </div>
        </div>










        <div class="row card shadow p-0 mb-4" style={{borderRadius:"15px"}}>

            <div class="shopping_cart_table table-responsive p-0" style={{borderRadius:"15px"}}> 

            <table className="table table-borderless" style={{ border: "none" }}>
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
                            borderRadius: "0px 15px 15px 0px",
                            backgroundColor: "orange",
                            textAlign: "left" }} className="thead"
                          
                        >
                          {" "}
                          <span style={{color:"#777777"}}>Estimated Delivery Date</span> <br />{" "}
                          24 April 2024
                        </th>
                      </tr>
                    </thead>
            <tbody>
            {items.map(item=>(

            <tr  key={item.id} style={{borderBottom: "1px solid #777"}}>
            <td>
             
                <ul className="cart_list d-block d-xl-flex align-items-center mt-5 " style={{width:"100%"}}>

                    <li className="ps-3 pe-1"><a href="#"><img
                                src={item.image} alt="cart1.png" className="product-img1111" /></a></li>
                    <li className="ms-2 ms-md-3">
                        <div className="cart_title text-black">
                            <h3 className="fz16">{item.name}  </h3>
                            <h5 className="fz14"> Color - {item.color} </h5>
                        </div>
                    </li>
                </ul>
                
                 

 
            </td>
            
            </tr>
            
        ))}
            </tbody>
            
            
            </table>
            
            
        </div>
        
        <div className="d-flex ms-5 me-2 mb-5">
        <button className="btn btn-primary px-3" style={{color:"#F70000",background:"#FFA31A1A",border:"1px solid #FFA31A",borderRadius:"20px"}}>
      Click me
    </button>
    <h5 className='ms-3 mt-2'>Your order has been accepted</h5>

        </div>
        <div className="d-flex  justify-content-between">
        <div className="d-flex ms-5 me-2 mb-5">
        <button className="btn btn-primary px-3 mx-2" style={{color:"white",background:"red",border:"none",borderRadius:"20px"}}>
        Track Order
    </button>
    <button className="btn btn-primary px-3" style={{color:"rgba(119, 119, 119, 1)",background:"none",border:"1px solid black",borderRadius:"20px"}}>
    Invoice
    </button>
        </div>
        <h5 style={{color:"#F70000"}}>
        Cancel order
    </h5>

        </div>
        </div>



              




        <div class="row card shadow p-0 mb-3" style={{borderRadius:"15px"}}>

        <div class="shopping_cart_table table-responsive p-0" style={{borderRadius:"15px"}}> 

        <table className="table table-borderless" style={{ border: "none" }}>
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
              borderRadius: "0px 15px 15px 0px",
              backgroundColor: "orange",
              textAlign: "left" }} className="thead"
            
          >
            {" "}
            <span style={{color:"#777777"}}>Estimated Delivery Date</span> <br />{" "}
            24 April 2024
          </th>
        </tr>
      </thead>
        <tbody>
        {items.map(item=>(

        <tr  key={item.id} style={{borderBottom: "1px solid #777"}}>
        <td>
         
            <ul className="cart_list d-block d-xl-flex align-items-center mt-5 " style={{width:"100%"}}>

                <li className="ps-3 pe-1"><a href="#"><img
                            src={item.image} alt="cart1.png" className="product-img1111" /></a></li>
                <li className="ms-2 ms-md-3">
                    <div className="cart_title text-black">
                        <h3 className="fz16">{item.name}  </h3>
                        <h5 className="fz14"> Color - {item.color} </h5>
                    </div>
                </li>
            </ul>
            
             


        </td>
        
        </tr>
        
    ))}
        </tbody>
        
        </table>
        
        
    </div>
   
    <div className="d-flex ms-5 me-2 mb-5">
    <button className="btn btn-primary px-3" style={{color:"#06E775",background:"#06E77512",border:" 1px solid #06E775",borderRadius:"20px"}}>
  Click me
</button>
<h5 className='ms-3 mt-2'>Your order has been accepted</h5>

    </div>
    <div className="d-flex  justify-content-between">
    <div className="d-flex ms-5 me-2 mb-5">
    <button className="btn btn-primary px-3 mx-2" style={{color:"white",background:"red",border:"none",borderRadius:"20px"}}>
    Add Review
</button>
<button className="btn btn-primary px-3" style={{color:"rgba(119, 119, 119, 1)",background:"none",border:"1px solid black",borderRadius:"20px"}}>
Invoice
</button>
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

export default Order
