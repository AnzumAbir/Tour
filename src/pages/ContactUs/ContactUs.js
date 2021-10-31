import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>We will reach you soon</p>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Inquiry</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Put your Comment here"></textarea>
                <br />
                <button>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;