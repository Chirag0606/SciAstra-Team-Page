import React from 'react'
import "./Advisor.css";
import oc from "../Pictures/oc.jpg";

const Advisor = () => {
    return (
        <div className='Advisor'>
        <h1 className='men-head'>Meet Your Mentors & Advisors</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div className="col">
                    <div className="card">
                        <img
                            src={oc}
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Message Him Now</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={oc}
                            className="card-img-top"
                            alt="Palm Springs Road"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Message Him Now</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={oc}
                            className="card-img-top"
                            alt="Los Angeles Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Message Him Now</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={oc}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Message Him Now</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={oc}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Message Him Now</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={oc}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Message Him Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advisor