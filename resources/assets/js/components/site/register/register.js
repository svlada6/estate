import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
    render() {
        return (
            <div id="page-content">
                <div className="container">
                    <ol className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li className="active">Create an Account</li>
                    </ol>
                </div>


                <div className="container">
                    <header><h1>Create an Account</h1></header>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            <h3>Account Type</h3>
                            <form role="form" id="form-create-account" method="post" >
                                <div className="radio" id="create-account-user">
                                    <label>
                                        <input type="radio" id="account-type-user" name="account-type" required />Regular User
                                    </label>
                                </div>
                                <div className="radio" id="agent-switch" data-agent-state="">
                                    <label>
                                        <input type="radio" id="account-type-agent" name="account-type" required />Agent
                                    </label>
                                </div>
                                <div id="agency" className="disabled">
                                    <div className="form-group">
                                        <label for="account-agency">Select your agency:</label>
                                        <select name="account-agency" id="account-agency">
                                            <option value="">Agency</option>
                                            <option value="1">Estate+</option>
                                            <option value="2">Northfolk Eastate</option>
                                            <option value="3">Maximum Properties</option>
                                            <option value="4">Edd's Homes</option>
                                            <option value="5">Will & Scotch</option>
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div className="form-group">
                                    <label for="form-create-account-full-name">Full Name:</label>
                                    <input type="text" className="form-control" id="form-create-account-full-name" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-email">Email:</label>
                                    <input type="email" className="form-control" id="form-create-account-email" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-password">Password:</label>
                                    <input type="password" className="form-control" id="form-create-account-password" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-confirm-password">Confirm Password:</label>
                                    <input type="password" className="form-control" id="form-create-account-confirm-password" required />
                                </div>
                                <div className="checkbox pull-left">
                                    <label>
                                        <input type="checkbox" id="account-type-newsletter" name="account-newsletter" />Receive Newsletter
                                     </label>
                                </div>
                                <div className="form-group clearfix">
                                    <button type="submit" className="btn pull-right btn-default" id="account-submit">Create an Account</button>
                                </div>
                            </form>
                            <hr />
                            <div className="center">
                                <figure className="note">By clicking the “Create an Account” button you agree with our <a href="terms-conditions.html">Terms and conditions</a></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}