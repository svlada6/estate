import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                <ul className="nav navbar-nav">
                    <li className="active has-child"><a href="#">Homepage</a>
                        <ul className="child-navigation">
                            <li><a href="index-google-map-fullscreen.html">Google Map Full Screen</a></li>
                            <li><a href="index-google-map-fixed-height.html">Google Map Fixed Height</a></li>
                            <li><a href="index-google-map-fixed-navigation.html">Google Map Fixed Navigation</a></li>
                            <li><a href="index-osm.html">OpenStreetMap Full Screen</a></li>
                            <li><a href="index-osm-fixed-height.html">OpenStreetMap Fixed Height</a></li>
                            <li><a href="index-osm-fixed-navigation.html">OpenStreetMap Fixed Navigation</a></li>
                            <li><a href="index-slider.html">Slider Homepage</a></li>
                            <li><a href="index-slider-search-box.html">Slider with Search Box</a></li>
                            <li><a href="index-horizontal-search-floated.html">Horizontal Search Floated</a></li>
                            <li><a href="index-advanced-horizontal-search.html">Horizontal Advanced Search</a></li>
                            <li><a href="index-slider-horizontal-search-box.html">Horizontal Slider Search</a></li>
                            <li><a href="index-slider-horizontal-search-box-floated.html">Horizontal Slider Floated Search</a></li>
                        </ul>
                    </li>
                    <li className="has-child"><a href="#">Properties</a>
                        <ul className="child-navigation">
                            <li><a href="property-detail.html">Property Detail</a></li>
                            <li><a href="properties-listing.html">Masonry Listing</a></li>
                            <li><a href="properties-listing-grid.html">Grid Listing</a></li>
                            <li><a href="properties-listing-lines.html">Lines Listing</a></li>
                        </ul>
                    </li>
                    <li className="has-child"><a href="#">Pages</a>
                        <ul className="child-navigation">
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="agent-detail.html">Agent Detail</a></li>
                            <li><a href="invoice-print.html">Invoice</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="my-properties.html">My Properties</a></li>
                            <li><a href="bookmarked.html">Bookmarked Properties</a></li>
                            <li><a href="create-account.html">Create Account</a></li>
                            <li><a href="create-agency.html">Create Agency</a></li>
                            <li><a href="sign-in.html">Sign In</a></li>
                            <li className="has-child"><a href="#">Error Pages</a>
                                <ul className="child-navigation">
                                    <li><a href="403.html">403</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="500.html">500</a></li>
                                </ul>
                            </li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="sticky-footer.html">Sticky Footer</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="shortcodes.html">Shortcodes</a></li>
                            <li><a href="timeline.html">Timeline</a></li>
                            <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                            <li><a href="rtl.html">RTL Support</a></li>
                        </ul>
                    </li>
                    <li className="has-child"><a href="#">Agents & Agencies</a>
                        <ul className="child-navigation">
                            <li><a href="agents-listing.html">Agents Listing</a></li>
                            <li><a href="agent-detail.html">Agent Detail</a></li>
                            <li><a href="agencies-listing.html">Agencies Listing</a></li>
                            <li><a href="agency-detail.html">Agency Detail</a></li>
                        </ul>
                    </li>
                    <li><a href="submit.html">Submit</a></li>
                    <li className="has-child"><a href="#">Blog</a>
                        <ul className="child-navigation">
                            <li><a href="blog.html">Blog Listing</a></li>
                            <li><a href="blog-detail.html">Blog Post Detail</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Kontakt</a></li>
                </ul>
            </nav>
        )
    }
}