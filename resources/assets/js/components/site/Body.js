import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';


export default class Body extends Component {
    render() {
        return (
            <div className="wrapper">

                <div className="navigation">
                    <div className="secondary-navigation">
                        <div className="container">
                            <div className="contact">
                                <figure><strong>Phone:</strong>+1 810-991-3842</figure>
                                <figure><strong>Email:</strong>zoner@example.com</figure>
                            </div>
                            <div className="user-area">
                                <div className="actions">
                                    <a href="create-agency.html" className="promoted">Create Agency</a>
                                    <a href="create-account.html" className="promoted"><strong>Register</strong></a>
                                    <a href="sign-in.html">Sign In</a>
                                </div>
                                <div className="language-bar">
                                    <a href="#" className="active"><img src="assets/img/flags/gb.png" alt="" /></a>
                                    <a href="#"><img src="assets/img/flags/de.png" alt="" /></a>
                                    <a href="#"><img src="assets/img/flags/es.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <header className="navbar" id="top" role="banner">
                            <div className="navbar-header">
                                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="navbar-brand nav" id="brand">
                                    <a href="index-google-map-fullscreen.html"><img src="assets/img/logo.png" alt="brand" /></a>
                                </div>
                            </div>
                            <Nav />
                            >
                <div className="add-your-property">
                                <a href="submit.html" className="btn btn-default"><i className="fa fa-plus"></i><span className="text">Add Your Property</span></a>
                            </div>
                        </header>
                    </div>
                </div>

                <div className="container">
                    <div className="geo-location-wrapper">
                        <span className="btn geo-location"><i className="fa fa-map-marker"></i><span className="text">Find My Position</span></span>
                    </div>
                </div>


                <div id="map"></div>



                <div className="search-box-wrapper">
                    <div className="search-box-inner">
                        <div className="container">
                            <div className="search-box map">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#search-form-sale" data-toggle="tab">Sale</a></li>
                                    <li><a href="#search-form-rent" data-toggle="tab">Rent</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade in active" id="search-form-sale">
                                        <form role="form" id="form-map-sale" className="form-map form-search clearfix">
                                            <div className="row">
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-sale-country">
                                                            <option value="">Country</option>
                                                            <option value="1">France</option>
                                                            <option value="2">Great Britain</option>
                                                            <option value="3">Spain</option>
                                                            <option value="4">Russia</option>
                                                            <option value="5">United States</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-sale-city">
                                                            <option value="">City</option>
                                                            <option value="1">New York</option>
                                                            <option value="2">Los Angeles</option>
                                                            <option value="3">Chicago</option>
                                                            <option value="4">Houston</option>
                                                            <option value="5">Philadelphia</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-sale-district">
                                                            <option value="">District</option>
                                                            <option value="1">Manhattan</option>
                                                            <option value="2">The Bronx</option>
                                                            <option value="3">Brooklyn</option>
                                                            <option value="4">Queens</option>
                                                            <option value="5">Staten Island</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-sale-property-type">
                                                            <option value="">Property Type</option>
                                                            <option value="1">Apartment</option>
                                                            <option value="2">Condominium</option>
                                                            <option value="3">Cottage</option>
                                                            <option value="4">Flat</option>
                                                            <option value="5">House</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-sale-price">
                                                            <option value="">Price</option>
                                                            <option value="1">$10,000 +</option>
                                                            <option value="2">$50,000 +</option>
                                                            <option value="3">$100,000 +</option>
                                                            <option value="4">$500,000 +</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-default">Search Sale</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="search-form-rent">
                                        <form role="form" id="form-map-rent" className="form-map form-search clearfix">
                                            <div className="row">
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-rent-city">
                                                            <option value="">City</option>
                                                            <option value="1">New York</option>
                                                            <option value="2">Los Angeles</option>
                                                            <option value="3">Chicago</option>
                                                            <option value="4">Houston</option>
                                                            <option value="5">Philadelphia</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-rent-district">
                                                            <option value="">District</option>
                                                            <option value="1">Manhattan</option>
                                                            <option value="2">The Bronx</option>
                                                            <option value="3">Brooklyn</option>
                                                            <option value="4">Queens</option>
                                                            <option value="5">Staten Island</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-rent-property-type">
                                                            <option value="">Property Type</option>
                                                            <option value="1">Apartment</option>
                                                            <option value="2">Condominium</option>
                                                            <option value="3">Cottage</option>
                                                            <option value="4">Flat</option>
                                                            <option value="5">House</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-rent-payment">
                                                            <option value="">Payment</option>
                                                            <option value="1">Monthly</option>
                                                            <option value="2">Quarterly</option>
                                                            <option value="3">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="form-rent-price">
                                                            <option value="">Price</option>
                                                            <option value="1">$100 +</option>
                                                            <option value="2">$500 +</option>
                                                            <option value="2">$1000 +</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-sm-4">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-default">Search Rent</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="page-content">
                    <section id="banner">
                        <div className="block has-dark-background background-color-default-darker center text-banner">
                            <div className="container">
                                <h1 className="no-bottom-margin no-border">Zoner Is Fully Loaded Real Estate Template with <a href="#" className="text-underline">Tons of Features</a>!</h1>
                            </div>
                        </div>
                    </section>
                    <section id="our-services" className="block">
                        <div className="container">
                            <header className="section-title"><h2>Our Services</h2></header>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="feature-box equal-height">
                                        <figure className="icon"><i className="fa fa-folder"></i></figure>
                                        <aside className="description">
                                            <header><h3>Wide Range of Properties</h3></header>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            <a href="properties-listing.html" className="link-arrow">Read More</a>
                                        </aside>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="feature-box equal-height">
                                        <figure className="icon"><i className="fa fa-users"></i></figure>
                                        <aside className="description">
                                            <header><h3>14 Agents for Your Service</h3></header>
                                            <p>Aliquam gravida magna et fringilla convallis. Pellentesque habitant morbi </p>
                                            <a href="agents-listing.html" className="link-arrow">Read More</a>
                                        </aside>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="feature-box equal-height">
                                        <figure className="icon"><i className="fa fa-money"></i></figure>
                                        <aside className="description">
                                            <header><h3>Best Price Guarantee!</h3></header>
                                            <p>Phasellus non viverra tortor, id auctor leo. Suspendisse id nibh placerat</p>
                                            <a href="#" className="link-arrow">Read More</a>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="price-drop" className="block">
                        <div className="container">
                            <header className="section-title">
                                <h2>Price Drop</h2>
                                <a href="properties-listing.html" className="link-arrow">All Properties</a>
                            </header>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-06.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 11,000</div>
                                                    <h3>3398 Lodgeville Road</h3>
                                                    <figure>Golden Valley, MN 55427</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>0</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-04.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 38,000</div>
                                                    <h3>2186 Rinehart Road</h3>
                                                    <figure>Doral, FL 33178 </figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-07.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 325,000</div>
                                                    <h3>3705 Brighton Circle Road</h3>
                                                    <figure>Glenwood, MN 56334</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-08.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 16,000</div>
                                                    <h3>362 Lynn Ogden Lane</h3>
                                                    <figure>Galveston, TX 77550</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <aside id="advertising" className="block">
                        <div className="container">
                            <a href="submit.html">
                                <div className="banner">
                                    <div className="wrapper">
                                        <span className="title">Do you want your property to be listed here?</span>
                                        <span className="submit">Submit it now! <i className="fa fa-plus-square"></i></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </aside>
                    <section id="new-properties" className="block">
                        <div className="container">
                            <header className="section-title">
                                <h2>New Properties for You</h2>
                                <a href="properties-listing.html" className="link-arrow">All Properties</a>
                            </header>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-09.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 11,000</div>
                                                    <h3>3398 Lodgeville Road</h3>
                                                    <figure>Golden Valley, MN 55427</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>0</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-03.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 38,000</div>
                                                    <h3>2186 Rinehart Road</h3>
                                                    <figure>Doral, FL 33178 </figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-06.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 325,000</div>
                                                    <h3>3705 Brighton Circle Road</h3>
                                                    <figure>Glenwood, MN 56334</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-01.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 16,000</div>
                                                    <h3>362 Lynn Ogden Lane</h3>
                                                    <figure>Galveston, TX 77550</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-02.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 18,000</div>
                                                    <h3>2506 B Street</h3>
                                                    <figure>New Brighton, MN 55112</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>280m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-12.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 136,000</div>
                                                    <h3>3990 Late Avenue</h3>
                                                    <figure>Kingfisher, OK 73750</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>30m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>0</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-05.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 12,680</div>
                                                    <h3>297 Marie Street</h3>
                                                    <figure>Towson, MD 21204 </figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-10.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 12,800</div>
                                                    <h3>64 Timberbrook Lane</h3>
                                                    <figure>Denver, CO 80202</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="testimonials" className="block">
                        <div className="container">
                            <header className="section-title"><h2>Testimonials</h2></header>
                            <div className="owl-carousel testimonials-carousel">
                                <blockquote className="testimonial">
                                    <figure>
                                        <div className="image">
                                            <img alt="" src="assets/img/client-01.jpg" />
                                        </div>
                                    </figure>
                                    <aside className="cite">
                                        <p>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</p>
                                        <footer>Natalie Jenkins</footer>
                                    </aside>
                                </blockquote>
                                <blockquote className="testimonial">
                                    <figure>
                                        <div className="image">
                                            <img alt="" src="assets/img/client-01.jpg" />
                                        </div>
                                    </figure>
                                    <aside className="cite">
                                        <p>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</p>
                                        <footer>Natalie Jenkins</footer>
                                    </aside>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    <section id="partners" className="block">
                        <div className="container">
                            <header className="section-title"><h2>Our Partners</h2></header>
                            <div className="logos">
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-01.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-02.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-03.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-04.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-05.png" alt="" /></a></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
