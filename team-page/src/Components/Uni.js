import React from 'react'
import "./Uni.css";
import mit from "../Pictures/mit.jpg";
import cam from "../Pictures/cam.jpg";
import ox from "../Pictures/ox.jpg";
import har from "../Pictures/har.jpg";
import sta from "../Pictures/sta.jpg";
import eth from "../Pictures/eth.jpg";
import chi from "../Pictures/chi.jpg";
import pen from "../Pictures/pen.jpg";

const Uni = () => {
    return (
        <div className='uni'>
            <h1 className='head'>Learn from Scientists, Research Scholars from the Top Institutes in the World</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div className="col">
                    <div className="card">
                        <img
                            src={mit}
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Massachusetts Institute of Technology (MIT)</h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={cam}
                            className="card-img-top"
                            alt="Palm Springs Road"
                        />
                        <div className="card-body">
                            <h5 className="card-title">University of Cambridge </h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={ox}
                            className="card-img-top"
                            alt="Los Angeles Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                University of Oxford</h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={har}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Harvard University</h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={sta}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Stanford University</h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={eth}
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">ETH Zurich (Swiss Federal Institute of Technology) </h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={chi}
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                        />
                        <div className="card-body">
                            <h5 className="card-title">University of Chicago</h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={pen}
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                        />
                        <div className="card-body">
                            <h5 className="card-title">University of Pennsylvania</h5>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h1 className='so'>..... And so On</h1>
                </div>
            </div>
        </div>
    )
}

export default Uni