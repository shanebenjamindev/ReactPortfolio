// Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

function Contact() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
        document.getElementById('contactNotification').innerHTML =
            'CONTACT';

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);

        // Send email using EmailJS
        emailjs
            .sendForm('service_zfrjend', 'template_sicd0tn', e.target, 'Upxiat5EO1yLQlRQX')
            .then(
                (result) => {
                    console.log(result.text);
                    // Handle success
                    document.getElementById('contactNotification').innerHTML =
                        'successfully send mail, thanks for considering and giving me an opportunity';

                },
                (error) => {
                    console.log(error.text);
                    // Handle error
                }
            );

        // Reset the form fields
        e.target.reset();
    };

    return (
        <section id="contact">
            <div className="contact">
                <div className="contactOverlay"></div>
                <div className="myitem" onClick={handleClick}>
                    <h5 id="contactNotification" className="focus__Title">Contact</h5>
                    <i className="fa-solid fa-angles-down fa-fade"></i>
                </div>
                {showForm && (
                    <div className="form-custom wow animate__animated animate__fadeInDown animate__duration-0.2s">
                        <form className="" onSubmit={handleSubmit}>
                            <div className="">
                                <label htmlFor="name" className="form-label">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="">
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className="form-input"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="">
                                <label htmlFor="message" className="form-label">
                                    Message:
                                </label>
                                <textarea
                                    className="form-textarea"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btnsubmit">
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;
