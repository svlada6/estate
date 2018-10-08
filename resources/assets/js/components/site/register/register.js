import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
    render() {
        return (
            <div id="page-content">
                <div className="container">
                    <ol className="breadcrumb">
                        <li><a href="#">Početna</a></li>
                        <li className="active">Kreiraj Nalog</li>
                    </ol>
                </div>


                <div className="container">
                    <header><h1>Kreiraj Nalog</h1></header>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            <h3>Vrsta Naloga</h3>
                            <form role="form" id="form-create-account" method="post" >
                                <div className="radio" id="create-account-user">
                                    <label>
                                        <input type="radio" id="account-type-user" name="account-type" required />Običan korisnik
                                    </label>
                                </div>
                                <div className="radio" id="agent-switch" data-agent-state="">
                                    <label>
                                        <input type="radio" id="account-type-agent" name="account-type" required />Agencija
                                    </label>
                                </div>
                                <hr />
                                <div className="form-group">
                                    <label for="form-create-account-first-name">Ime:</label>
                                    <input type="text" className="form-control" id="form-create-account-first-name" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-last-name">Prezime:</label>
                                    <input type="text" className="form-control" id="form-create-account-last-name" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-email">Email:</label>
                                    <input type="email" className="form-control" id="form-create-account-email" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-password">Šifra:</label>
                                    <input type="password" className="form-control" id="form-create-account-password" required />
                                </div>
                                <div className="form-group">
                                    <label for="form-create-account-confirm-password">Ponovi Šifru:</label>
                                    <input type="password" className="form-control" id="form-create-account-confirm-password" required />
                                </div>
                                <div className="checkbox pull-left">
                                    <label>
                                        <input type="checkbox" id="account-type-newsletter" name="account-newsletter" />Prijavi se za obaveštenja
                                     </label>
                                </div>
                                <div className="form-group clearfix">
                                    <button type="submit" className="btn pull-right btn-default" id="account-submit">Napravi Nalog</button>
                                </div>
                            </form>
                            <hr />
                            <div className="center">
                                <figure className="note">kreiranjem naloga prihvatate opste uslove korisćenja <a href="terms-conditions.html">Opšti uslovi korišćenja</a></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}