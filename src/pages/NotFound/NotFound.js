import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '80%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG9kP6Y9ro_rQiO1HvTatJ9CZm2xo5VupyA&usqp=CAU" alt="" />
            <br />
            <Link to="/">
                <button> Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;