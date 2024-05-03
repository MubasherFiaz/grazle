
import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {

  return (
    <nav id="menu" className="stylehome1">
      <ul>
        <li><span>Home</span>
          <ul>
            <li><Link to="/index1">Home V1</Link></li>
            <li><Link to="/index2">Home V2</Link></li>
            <li><Link to="/index3">Home V3</Link></li>
            <li><Link to="/index4">Home V4</Link></li>
            <li><Link to="/index5">Home V5</Link></li>
            <li><Link to="/index6">Home V6</Link></li>
            <li><Link to="/index7">Home V7</Link></li>
            <li><Link to="/index8">Home V8</Link></li>
            <li><Link to="/index9">Home V9</Link></li>
            <li><Link to="/index10">Home V10</Link></li>
          </ul>
        </li>
        <li><span>Shop</span>
          <ul>
            <li><span>Shop Listing</span>
              <ul>
                <li><Link to="/page-shop-list-v1">Listing v1</Link></li>
                <li><Link to="/page-shop-list-v2">Listing v2</Link></li>
                <li><Link to="/page-shop-list-v3">Listing v3</Link></li>
                <li><Link to="/page-shop-list-v4">Listing v4</Link></li>
                <li><Link to="/page-shop-list-v5">Listing v5</Link></li>
                <li><Link to="/page-shop-list-v6">Listing v6</Link></li>
                <li><Link to="/page-shop-list-v7">Listing v7</Link></li>
                <li><Link to="/page-shop-list-v8">Listing v8</Link></li>
              </ul>
            </li>
            <li><span>Shop Single</span>
              <ul>
                <li><Link to="/page-shop-single-v1">Version 1</Link></li>
                <li><Link to="/page-shop-single-v2">Version 2</Link></li>
                <li><Link to="/page-shop-single-v3">Version 3</Link></li>
                <li><Link to="/page-shop-single-v4">Version 4</Link></li>
                <li><Link to="/page-shop-single-v5">Version 5</Link></li>
                <li><Link to="/page-shop-single-color-switch">Color Switch</Link></li>
                <li><Link to="/page-shop-single-image-switch">Image Switch</Link></li>
                <li><Link to="/page-shop-single-countdown">Single Countdown</Link></li>
                <li><Link to="/page-shop-single-external-product">External Product</Link></li>
                <li><Link to="/page-shop-single-grouped-product">Grouped Product</Link></li>
                <li><Link to="/page-shop-single-bought-together">Bought Together</Link></li>
              </ul>
            </li>
            <li><span>User Dashboard</span>
              <ul>
                <li><Link to="/page-dashboard">Dashboard</Link></li>
                <li><Link to="/page-dashboard-order">Orders</Link></li>
                <li><Link to="/page-dashboard-wish-list">Downloads</Link></li>
                <li><Link to="/page-dashboard-address">Addresses</Link></li>
                <li><Link to="/page-dashboard-account-details">Account Details</Link></li>
                <li><Link to="/page-dashboard-wish-list">Wishlist</Link></li>
                <li><Link to="/page-login">Logout</Link></li>
              </ul>
            </li>
            <li><span>Shop Pages</span>
              <ul>
                <li><Link to="/page-shop-cart">Cart</Link></li>
                <li><Link to="/page-shop-checkout">Checkout</Link></li>
                <li><Link to="/page-shop-order-received">Order Received</Link></li>
                <li><Link to="/page-order-tracking">Order Tracking</Link></li>
                <li><Link to="/page-store-location">Store Locator</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span>Pages</span>
          <ul>
            <li><Link to="/page-about">About Us</Link></li>
            <li><span>Accounts</span>
              <ul>
                <li><Link to="/page-account-details">Account Details</Link></li>
                <li><Link to="/page-account-order">Account Order</Link></li>
                <li><Link to="/page-account-address">Account Address</Link></li>
                <li><Link to="/page-account-wishlist">Account Wishlist</Link></li>
                <li><Link to="/page-account-invoice">Account Invoice</Link></li>
              </ul>
            </li>
            <li><Link to="/page-become-vendor">Become Vendor</Link></li>
            <li><span>Vendor Pages</span>
              <ul>
                <li><Link to="/page-vendor-list">Vendor List</Link></li>
                <li><Link to="/page-vendor-single">Vendor Single</Link></li>
                <li><Link to="/page-dashboard">Dashboard</Link></li>
                <li><Link to="/page-dashboard-products">Products</Link></li>
                <li><Link to="/page-dashboard-order">Order</Link></li>
                <li><Link to="/page-dashboard-customer">Customer</Link></li>
                <li><Link to="/page-dashboard-categories">Categories</Link></li>
                <li><Link to="/page-dashboard-message">Message</Link></li>
                <li><Link to="/page-dashboard-setting">Settings</Link></li>
              </ul>
            </li>
            <li><Link to="/page-brands">Brands</Link></li>
            <li><Link to="/page-contact">Contact</Link></li>
            <li><Link to="/page-coming-soon">Coming Soon</Link></li>
            <li><Link to="/page-help">Help</Link></li>
            <li><Link to="/page-error">404 Page</Link></li>
            <li><Link to="/page-faq">Faq</Link></li>
            <li><Link to="/page-invoices">Invoices</Link></li>
            <li><Link to="/page-login">Login</Link></li>
            <li><Link to="/page-register">Register</Link></li>
            <li><Link to="/page-terms">Terms and Conditions</Link></li>
            <li><Link to="/page-ui-element">UI Elements</Link></li>
          </ul>
        </li>
        <li><span>Blog</span>
          <ul>
            <li><Link to="/page-blog-grid">Blog Grid</Link></li>
            <li><Link to="/page-blog-grid-sidebar">Blog Grid Sidebar</Link></li>
            <li><Link to="/page-blog-details">Blog Details</Link></li>
            <li><Link to="/page-blog-list">Blog List</Link></li>
            <li><Link to="/page-blog-single">Blog Single</Link></li>
            <li><Link to="/page-blog-single2">Blog Single v2</Link></li>
          </ul>
        </li>
        <li className="title my-3 bb1 pl20 fz20 fw500 pb-3">Departments</li>
        <li><span><i className="flaticon-cooking mr20"></i>Home & Kitchen</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Home & Kitchen</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-armchair mr20"></i>Home & Furniture</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Home & Furniture</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-smartphone-1 mr20"></i>Electronics</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Electronics</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-bride-dress mr20"></i>Clothing & Accessories</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Clothing & Accessories</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-heart-beat mr20"></i>Health & Beauty</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Health & Beauty</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-volleyball mr20"></i>Sport & Outdoor</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Sport & Outdoor</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-groceries mr20"></i>Grocery & Market</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Grocery & Market</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-remote-control mr20"></i>Toy & Video Games</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Toy & Video Games</Link></li>
          </ul>
        </li>
        <li><span><i className="flaticon-feeding-bottle mr20"></i>Babies & Moms</span>
          <ul>
            <li><Link to="/page-shop-list-v1">Babies & Moms</Link></li>
          </ul>
        </li>
        <li><Link to="#" className="tdu text-thm1 text-capitalize">See More <i className="far fa-angle-down"></i></Link></li>
      </ul>
    </nav>
  );
}

export default SideNavbar