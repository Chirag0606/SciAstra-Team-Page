import React from 'react'
import "./Mentors.css";
import ava from "../Pictures/download.jpg"

const Mentors = () => {
    return (
        <div className='Mentor'>
        <h1 className='men-head'>Meet Your Mentors</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div className="col">
                    <div className="card">
                        <img
                            src={ava}
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={ava}
                            className="card-img-top"
                            alt="Palm Springs Road"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={ava}
                            className="card-img-top"
                            alt="Los Angeles Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={ava}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={ava}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={ava}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                                University/Occupation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors