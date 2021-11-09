import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);


    return (
        <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className="p-3">
                <h1>All Services</h1>
                <div className="services">
                    <div className="row p-5 m-5">
                        {services?.map((pd) => (
                            <div className="col-md-4">
                                <div className="service border border p-3">
                                    <div className="services-img ">
                                        <img className="w-100" src={pd?.image} alt="" />
                                    </div>

                                    <h6>Starting From: <span className="text-warning">{pd?.From}</span></h6>
                                    <h6>Destination: <span className="text-danger">{pd?.To}</span></h6>
                                    <h4>Package: <span className="text-danger">{pd?.model}</span></h4>
                                    <p>{pd?.description}</p>
                                    <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                                    <Link to={`/booking/${pd._id}`}>
                                        <button className="btn btn-success">Booking</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Services;
