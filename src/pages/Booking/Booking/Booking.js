import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const { serviceId } = useParams();
    return (
        <div>
            <h2 className="text-danger" >{service.name}</h2>
            <h2>Booking Id: {serviceId}</h2>
            <h2><img src={service.img} alt="" /></h2>
            <h4>Description:{service.description}</h4>
            <h3>Price:${service.price}</h3>
            <div>
                <button onClick={() => {
                    alert("Order has been succesfully placed.Look into other plans!")
                }} className="btn-primary">Place Order</button>

            </div>
        </div>
    );
};

export default Booking;