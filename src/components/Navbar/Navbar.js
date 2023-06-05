import React from 'react';
import './Navbar.css'
const Navbar = () => {
   

    return (
            <div className="fixed col-lg-6">
            <div className="fixedContent wow animate__animated animate__fadeIn">
                    <div className="left__Header intro">
                        <h1>Vo Giang</h1>
                        <h3>Front-End Web Developer</h3>
                        <p>
                            I build accessible, inclusive products and
                            <br />
                            digital experiences for the web.
                        </p>
                    </div>
                    <div className="left__Body">
                        <nav className="nav">
                            <ul>
                                <a href="#about"
                                ><li className="nav__Link active">
                                        <span>About</span>
                                    </li></a
                                >
                            <a href="#education"
                            ><li className="nav__Link">
                                    <span>Education</span>
                                </li></a
                            >
                                <a href="#experiences"
                                ><li className="nav__Link">
                                        <span>Experiences</span>
                                    </li></a
                                >
                                <a href="#projects"
                                ><li className="nav__Link">
                                        <span>Projects</span>
                                    </li></a
                                >
                            </ul>
                        </nav>
                    </div>

                    <div className="left__Bottom">
                        <div className="contact__SocialIcon">
                            <i className="fa-solid fa-phone"></i>
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-solid fa-envelope"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
     
    );
}

export default Navbar;