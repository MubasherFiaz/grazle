import React from "react";
import { Link } from "react-router-dom";

const SimpleCard = ({ item }) => {
  return (
    // <div className="card ">
    //   <div className="shop_item home7_style small_style bdrtrb1 px-2 px-sm-3  ">
    //     <div className="thumb pb30 ">
    //       <img src={item.image} alt="Recent Products" />
    //     </div>
    //     <div className="details">
    //       <div className="title ">{item.product}</div>
    //       <div className="title">
    //         <Link to="#" style={{ color: "#F70000", textDecoration: "none" }}>
    //           {item.deal}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="best-productCard">
      <div className="best-productCard-Header">
        <div className="cardImage">
          <img src={item?.image} alt="Best" />
        </div>
      </div>
      <div className="best-productCard-Body">
        <div className="title ">
          <h3>{item?.name}</h3>
        </div>
        <div className="desc">
          <Link to="#">{item.deal || "Special Deal"}</Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
