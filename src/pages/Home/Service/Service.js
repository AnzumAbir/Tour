import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css";

const Service = (props) => {
    const { service } = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className=" text-center pb-3 service col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>price:${price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`booking/${_id} `}>
                <button className="btn btn-primary">Book Now</button></Link>
        </div>
    );
};

export default Service;