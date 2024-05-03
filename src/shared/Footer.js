import React from 'react'
import footerlogo from "../assets/img/Grazle-Logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <section className="footer_one bgc-gmart-gray">
    <div className="container pb60"> 
        <div className="row ">
            <div className="col">
                <div className="footer_contact_widget">
                    <img src={footerlogo} alt=""/>
                    <div className="social_icon_list mt30">
                        <ul className="mb20">
                            <li className="list-inline-item"><Link style={{textDecoration:"none"}}   to="#"><i className="fab fa-facebook"></i></Link>
                            </li>
                            <li className="list-inline-item"><Link style={{textDecoration:"none"}}   to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li className="list-inline-item"><Link style={{textDecoration:"none"}}   to="#"><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li className="list-inline-item"><Link style={{textDecoration:"none"}}   to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="footer_qlink_widget">
                    <h4>Product</h4>
                    <ul className="list-unstyled">
                        <li><Link style={{textDecoration:"none"}}   to="#">Overview</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Features</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Tutorials</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Pricing</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Releases</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer_qlink_widget">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                        <li><Link style={{textDecoration:"none"}}   to="#">About</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Press</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Careers</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Contact</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Partners</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer_qlink_widget">
                    <h4>Support</h4>
                    <ul className="list-unstyled">
                        <li><Link style={{textDecoration:"none"}}   to="#">Help Center</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Safety Center</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Legal</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Privacy policy</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Status</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer_qlink_widget">
                    <h4>Legal</h4>
                    <ul className="list-unstyled">
                        <li><Link style={{textDecoration:"none"}}   to="#">Cookies Policy</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Privacy Policy</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Terms of Service</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Law Enforcement</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Status</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer_qlink_widget">
                    <h4>Follow us</h4>
                    <ul className="list-unstyled">
                        <li><Link style={{textDecoration:"none"}}   to="#">Facebook</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Twitter</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Dribbble</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">Instagram</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">LinkedIn</Link></li>
                    </ul>
                </div>
            </div>  
            <div className="col">
                <div className="footer_qlink_widget">
                    <h4>Reach us</h4>
                    <ul className="list-unstyled">
                        <li><Link style={{textDecoration:"none"}}   to="#">hello@landify.co</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">+91 98765 43210</Link></li>
                        <li><Link style={{textDecoration:"none"}}   to="#">772 Lyonwood Ave Walnut, CA 91789</Link></li> 
                    </ul>
                </div>
            </div>  
        </div>
    </div>
    <div className="container bdrt1 pt20 pb20">
        <div className="row">
            <div className="col-lg-6">
                <div className="copyright-widget text-center text-lg-start d-block d-lg-flex mb15-md">
                    <p className="me-4">© 2020 Landify UI Kit. All rights reserved</p>
                    <p><Link style={{textDecoration:"none"}}   to="#">Privacy</Link>·<Link style={{textDecoration:"none"}}   to="#">Terms</Link>·<Link style={{textDecoration:"none"}}   to="#">Sitemap</Link></p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="copyright-widget text-center text-lg-end">
                    <p><Link style={{textDecoration:"none"}}   to="#">Privacy</Link> | <Link style={{textDecoration:"none"}}   to="#">Terms</Link> | <Link style={{textDecoration:"none"}}   to="#">Sitemap</Link></p>
                    
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Footer
