import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="">
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

                            <a href="#skills"
                            ><li className="nav__Link">
                                    <span>Skills</span>
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
                        <a href="mailto:vophonggiang0205@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a type="button" href='https://github.com/vpgiang0205' aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;