import React, { useEffect, useState } from 'react';
import pimg from "../../assets/images/shop-items/shop-item57.png";
import pimg1 from "../../assets/images/shop-items/shop-item58.png";
import pimg2 from "../../assets/images/shop-items/shop-item59.png";
import pimg3 from "../../assets/images/shop-items/shop-item60.png";
import pimg4 from "../../assets/images/shop-items/shop-item61.png";
import ProductCard from '../../shared/ProductCard';

const Productcard = () => {
    const items = [
        { id: "1", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg},
        { id: "2", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg1 },
        { id: "3", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg2 },
        { id: "4", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg3 },
        { id: "5", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg4 },
        { id: "6", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg1 },
        { id: "7", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg2 },
        { id: "8", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg3 },
        { id: "9", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg4 }
    ];
    
  

    
  return (
    <div>
    <section className="trending-product pt0">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 container">
                
                <div className="best_item_slider_shop_lising_page navi_pagi_top_right shop_item_5grid_slider owl-theme owl-carousel d-flex col-12 row">
                    {items.map(item => (
                        <div key={item.id} className='col-md-6 col-lg-4 col-sm-12 mb-2'>
                        <ProductCard items={item}/>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Productcard
