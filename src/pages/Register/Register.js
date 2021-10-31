import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Registered ? <Link to="/login" >LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;