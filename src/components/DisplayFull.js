import React from 'react';
import { Link } from "react-router-dom";


function DisplayFull() {

    return (
        <div id="hero" >
            <div className="container  text-light ">
                <div className="row justify-content-sm-between align-content-sm-center align-items-sm-center" id='hero-container'>
                    <div className="col-sm text-sm-start text-center  my-5 my-sm-0">
                        <h1 className="mt-5 mt-sm-0 display-1" style={{ fontFamily: 'Permanent Marker' }}> <strong>Our <span className="text-danger">News</span> </strong></h1>
                        <p className="py-2 display-6" > <em>Top 20 news of all Categories</em></p>
                        <a href="#topNewsHome" className="btn btn-outline-danger btn-lg "> Let's Read News </a>

                    </div>

                    <div className="col-sm text-center">
                        <img className="img-fluid   d-sm-inline d-none" src="/assets/imgs/logo.svg" />
                    </div>

                </div>
            </div>

        </div>

    )
}

export default DisplayFull;