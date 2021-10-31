import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./services.css";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="mt-5" id="services">
            <h2>Choose Tour PLans</h2>
            <div className="service-container col-12 mt-5">

                {services.map(service => <Service
                    key={service.id}
                    service={service}></Service>)

                }</div>
        </div>
    );
};

export default Services;