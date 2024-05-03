import React, { useEffect, useState } from 'react'
import homeimg from "../../assets/img/2 copy.png";
import cardimg from "../../assets/images/shop-items/shop-item57.png";
import SimpleCard from '../../shared/SimpleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PriceCard from '../../shared/PriceCard';
import pimg from "../../assets/images/shop-items/shop-item57.png";
import pimg1 from "../../assets/images/shop-items/shop-item58.png";
import pimg2 from "../../assets/images/shop-items/shop-item59.png";
import pimg3 from "../../assets/images/shop-items/shop-item60.png";
import pimg4 from "../../assets/images/shop-items/shop-item61.png";
import lastimg from "../../assets/img/rasm.png";
import lastimg1 from "../../assets/img/rasm (1).png";
import lastimg2 from "../../assets/img/rasm (2).png";
import { Link } from 'react-router-dom';

const HomeCategory2 = () => {
    const items = [
        { id: "1", product: "Captain Pure B1",deal:"Special Deal", image: cardimg},
        { id: "2", product: "Captain Pure B2",deal:"Special Deal", image: cardimg },
        { id: "3", product: "Captain Pure B3",deal:"Special Deal", image: cardimg },
        { id: "4", product: "Captain Pure B2",deal:"Special Deal", image: cardimg },
        { id: "5", product: "Captain Pure B4",deal:"Special Deal", image: cardimg }
    ];
    const item = [
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
        setStartIndex1((startIndex1 + 1) % item.length);
    };

    const movePrev1 = () => {
        setStartIndex1((startIndex1 - 1 + item.length) % item.length);
    };

    const slicedItems1 = [...item.slice(startIndex1), ...item.slice(0, startIndex1)].slice(0, sliceNumber);
  return (
    <div>
    <section className="top-category pb30 pt0">
    <div className="container">
        <div className="row  ">
            <div className="col-lg-12 p-0">
                <div className="banner_one home1_style before_none color1 home3_large_banner " style={{borderRadius: "0px"}}>
                    <img src={homeimg} alt=""/>
                </div>
            </div>
        </div>
        
        <div className="row pink-row pb-3">
            <div className="col-lg-12">
                
                <div className="main-title d-flex justify-content-between mt-3">
                    <h2 className="title">Best For All</h2>
                    <div className="slider-controls">
                                <button onClick={movePrev} style={{border:"none", backgroundColor:"#F5F5F5",borderRadius:"50%",padding:"1rem",width:"3.5rem", marginLeft:"1.3rem"}}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                                <button onClick={moveNext} style={{border:"none", backgroundColor:"#F5F5F5",borderRadius:"50%",padding:"1rem",width:"3.5rem", marginLeft:"1.3rem"}}> <FontAwesomeIcon icon={faArrowRight} />  </button>
                            </div>
                </div>
                <div
                    className="best_item_slider_shop_lising_page navi_pagi_top_right shop_item_5grid_slider owl-theme owl-carousel d-flex">
                    {slicedItems.map(item => (
                        <div key={item.id}>
                          <SimpleCard items={item}/>
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
                                <h2 className="title">Trending</h2>
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


            <section className="top-category  ">
                <div className="container">
                    
                    <div className="row  "> 
                        <div className="col-lg-4 col-sm-12 ">
                            <div className="banner_one home1_style athome7 color4 mb30"  style={{backgroundColor: "#EBFFF1 "}}>
                                <div className="thumb"><img className="float-end" src={lastimg}
                                        alt="pineapple"/></div>
                                <div className="details">
                                    <h3 className="title" style={{color: "#4FAD2E"}}>Small Appliances</h3>
                                    <p className="para heading-color" style={{color: "#4FAD2E !important"}}>Upto 40%  Off Kitchen Products.</p>

                                    <Link to="#"
                                        className="shop_btn" style={{color: "#4FAD2E",textDecoration:"none"}}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 ">
                            <div className="banner_one home1_style athome7 color4 mb30"  style={{backgroundColor: "#EBF4FF "}}>
                                <div className="thumb"><img className="float-end" src={lastimg1}
                                        alt="pineapple"/></div>
                                <div className="details">
                                    <h3 className="title" style={{color: "#4FAD2E"}}>Small Appliances</h3>
                                    <p className="para heading-color" style={{color: "#4FAD2E !important"}}>Upto 40%  Off Kitchen Products.</p>

                                    <Link to="#"
                                        className="shop_btn" style={{color: "#4FAD2E",textDecoration:"none"}}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 ">
                            <div className="banner_one home1_style athome7 color5 mb30"  style={{backgroundColor: "#FFF5EE "}}>
                                <div className="thumb"><img className="float-end" src={lastimg2}
                                        alt="smartdevice.png"/> 
                                </div>
                                <div className="details">
                                    <h3 className="title" style={{color: "#4FAD2E"}}>Small Appliances</h3>
                                    <p className="para heading-color" style={{color: "#4FAD2E !important"}}>Upto 40%  Off Kitchen Products.</p>

                                    <Link to="#"
                                        className="shop_btn" style={{color: "#4FAD2E",textDecoration:"none"}}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default HomeCategory2
