import React, { useEffect, useState } from 'react';
import PriceCard from '../../shared/PriceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import pimg from "../../assets/images/shop-items/shop-item57.png";
import pimg1 from "../../assets/images/shop-items/shop-item58.png";
import pimg2 from "../../assets/images/shop-items/shop-item59.png";
import pimg3 from "../../assets/images/shop-items/shop-item60.png";
import pimg4 from "../../assets/images/shop-items/shop-item61.png";

const HomeProduct = () => {
    const items = [
        { id: "1", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg},
        { id: "2", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg1 },
        { id: "3", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg2 },
        { id: "4", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg3 },
        { id: "5", product: "FRUITS & VEGS", name:"Great Value Ultra Strong Paper Towels, Splits Sheets", price:"32.5", discount:"45" , image: pimg4 }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [startIndex1, setStartIndex1] = useState(0);

    const [sliceNumber, setSliceNumber] = useState(getSliceNumber());

    function getSliceNumber() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1440) {
            return 5;
        } else if (screenWidth >= 1024) {
            return 4;
        } else if (screenWidth >= 768) {
            return 3;
        } else if (screenWidth >= 600) {
            return 2;
        } else if(screenWidth<=475){
            return 1;
        }
    }

    useEffect(() => {
        function handleResize() {
            setSliceNumber(getSliceNumber());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const moveNext = () => {
        setStartIndex((startIndex + 1) % items.length);
    };

    const movePrev = () => {
        setStartIndex((startIndex - 1 + items.length) % items.length);
    };

    const slicedItems = [...items.slice(startIndex), ...items.slice(0, startIndex)].slice(0, sliceNumber);



    const moveNext1 = () => {
        setStartIndex1((startIndex1 + 1) % items.length);
    };

    const movePrev1 = () => {
        setStartIndex1((startIndex1 - 1 + items.length) % items.length);
    };

    const slicedItems1 = [...items.slice(startIndex1), ...items.slice(0, startIndex1)].slice(0, sliceNumber);

    return (
        <div>
            <section className="trending-product pt0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-title d-flex justify-content-between">
                                <h2 className="title">Recent Product</h2>
                                <div className="slider-controls">
                                <button onClick={movePrev} style={{border:"none", backgroundColor:"#F5F5F5",borderRadius:"50%",padding:"1rem",width:"3.5rem", marginLeft:"1.3rem"}}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                                <button onClick={moveNext} style={{border:"none", backgroundColor:"#F5F5F5",borderRadius:"50%",padding:"1rem",width:"3.5rem", marginLeft:"1.3rem"}}> <FontAwesomeIcon icon={faArrowRight} />  </button>
                            </div>
                            </div>
                            <div className="best_item_slider_shop_lising_page navi_pagi_top_right shop_item_5grid_slider owl-theme owl-carousel d-flex">
                                {slicedItems.map(item => (
                                    <div key={item.id}>
                                        <PriceCard items={item}/>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending-product pt0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-title d-flex justify-content-between">
                                <h2 className="title">Suggested For You</h2>
                                <div className="slider-controls ">
                                <button onClick={movePrev1} style={{border:"none", backgroundColor:"#F5F5F5",borderRadius:"50%",padding:"1rem",width:"3.5rem", marginLeft:"1.3rem"}}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                                <button onClick={moveNext1} style={{border:"none", backgroundColor:"#F5F5F5",borderRadius:"50%",padding:"1rem",width:"3.5rem", marginLeft:"1.3rem"}}> <FontAwesomeIcon icon={faArrowRight} />  </button>
                            </div>
                            </div>
                            <div className="best_item_slider_shop_lising_page navi_pagi_top_right shop_item_5grid_slider owl-theme owl-carousel d-flex">
                                {slicedItems1.map(item => (
                                    <div key={item.id}>
                                        <PriceCard items={item}/>
                                    </div>
                                ))}
                            </div>
                           
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeProduct;
