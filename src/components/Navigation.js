import React from 'react';
import { Link } from "react-router-dom";
import {CategoryContext} from '../CategoryContext';

function Navigation() {

    const {category} = React.useContext(CategoryContext);

    return (

        <div className="my-5">

{/* navbar-expand-md */}
            <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top" id="navbar">
                <div className="container">
                    <a href="#topNewsHome" className="navbar-brand" >
                        <span style={{ fontFamily: 'Permanent Marker' }}>Our <span className="text-danger">News </span></span>
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#topNewsHome" className="nav-link">{category}
                                </a>
                            </li>
                            
                            
                        </ul>

                    </div>
                </div>

            </nav>

        </div>



    )
}

export default Navigation;