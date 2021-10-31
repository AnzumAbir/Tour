import React, { useEffect, useState } from 'react';

const update = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })

    }
    return (
        <div>
            <h2 className="text-danger m-3">Manage Booking</h2>
            <div>
                {
                    services.map(service => <div key={service._id} >
                        <h3 className="m-5">
                            {service.name}
                            <br />
                            <img className="m-2" src={service.img} alt="" />
                            <br />
                            <button className="btn-danger" onClick={() => handleDelete(service._id)}>Delete</button>
                        </h3>

                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default update;