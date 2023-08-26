import React from 'react'
import Logo from "../Pictures/logo.webp";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <footer className="">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <a class="navbar-brand" href="#">
                                    <img src={Logo} width="70" height="70" alt="logo" />
                                </a>
                                <h5 className="text-white">SciAstra</h5>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>SciAstra</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>Home</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>Our Courses</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>Free Materials</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>Our Team</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white" style={{ textDecoration: 'none' }}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "black", textDecorationColor: "white" }}
                    >
                        © 2023 Copyright
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer