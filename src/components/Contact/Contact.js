// Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

function Contact() {
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(!showForm);
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        setShowForm(false);

        e.target.reset();

        // Send email using EmailJS
        emailjs.sendForm('service_zfrjend', 'template_sicd0tn', e.target, 'Upxiat5EO1yLQlRQX')
            .then((result) => {
                console.log(result.text);
                // Handle success
                alert('successfully send')
            }, (error) => {
                console.log(error.text);
                // Handle error
            });

        // Reset the form fields
        e.target.reset();
    };

    return (
        <section id="contact">
            <div className="contact">
                <div className="contactOverlay"></div>
                <div className="myitem" onClick={handleClick}>
                    <h5 className="focus__Title" >Contact</h5>
                    <i className="fa-solid fa-angles-down fa-fade"></i>
                </div>
                {showForm && (<div className=" form-custom wow animate__animated animate__fadeInDown animate__duration-0.2s">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="">
                            <label htmlFor="name" className="form-label">
                                Name:
                            </label>
                            <input
                                type="text"
                                className=""
                                id="name"
                                name="name"

                            />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                className=""
                                id="email"
                                name="email"

                            />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="form-label">
                                Message:
                            </label>
                            <textarea
                                className=""
                                id="message"
                                name="message"
                                rows="5"

                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btnsubmit"
                        >
                            Submit
                        </button>
                    </form>
                </div>)}</div>

        </section>

    );
}

export default Contact;
