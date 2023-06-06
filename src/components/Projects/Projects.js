import React from 'react';
import pro1 from '../../assets/img/1.png'
import pro2 from '../../assets/img/5.bmp'
import pro3 from '../../assets/img/2.png'
import './Projects.css'
const Projects = () => {
    return (
        <section id="projects">
            <h5 className="focus__Title">PERSONAL PROJECTS</h5>
            <a href="https://vpgiang0205.github.io/CapstoneProject/">
                <div className="myitem">
                    <div className="hover__Overlay"></div>
                    <div className="myitem__Content">
                        <img src={pro1} alt="" />
                    </div>
                    <div className="myitem__Content">
                        <div>
                            <p className="hover__Text">
                                <span className="focus__Text"
                                >Restaurant Capstone Project</span
                                >
                                <br />
                                A fully responsive website for a restaurant with an
                                elegant design and user-friendly interface and it is
                                optimized for mobile devices.
                                <br />
                            </p>
                        </div>

                        <div>
                            <ul className="focus__Items">
                                <li className="focus__Item">HTML</li>
                                <li className="focus__Item">CSS</li>
                                <li className="focus__Item">jQuery</li>
                                <li className="focus__Item">Bootstrap</li>
                                <li className="focus__Item">CSS Animation</li>
                                <li className="focus__Item">Responsive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://samar-one.vercel.app/">
                <div className="myitem">
                    <div className="hover__Overlay"></div>
                    <div className="myitem__Content">
                        <img src={pro2} alt="" />
                    </div>
                    <div className="myitem__Content">
                        <div>
                            <p className="hover__Text">
                                <span className="focus__Text">SAMAR Capstone Project</span>
                                <br />
                                The Samar project boasts a friendly design that is easy on
                                the eyes and incorporates smooth animations to enhance the
                                user experience.
                                <br />
                            </p>
                        </div>

                        <div>
                            <ul className="focus__Items">
                                <li className="focus__Item">HTML</li>
                                <li className="focus__Item">CSS</li>
                                <li className="focus__Item">jQuery</li>
                                <li className="focus__Item">CSS Animation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://portfoliothefinal.vercel.app/">
                <div className="myitem">
                    <div className="hover__Overlay"></div>
                    <div className="myitem__Content">
                        <img src={pro3} alt="" />
                    </div>
                    <div className="myitem__Content">
                        <div>
                            <p className="hover__Text">
                                <span className="focus__Text">Portfolio Project</span>
                                <br />
                                Have a contact form that allows visitors to send messages directly to me, easy for potential clients or employers to reach out.
                                <br />
                            </p>
                        </div>

                        <div>
                            <ul className="focus__Items">
                                <li className="focus__Item">HTML</li>
                                <li className="focus__Item">CSS</li>
                                <li className="focus__Item">jQuery</li>
                                <li className="focus__Item">Bootstrap</li>
                                <li className="focus__Item">CSS Animation</li>
                                <li className="focus__Item">Responsive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>

            <div classNameName="">
                <p className="hover__Text">
                    I am currently working on API projects (you can check on my github). If I can be Given the
                    opportunity to work in a supportive and challenging workplace, I
                    am confident that I can further enhance my expertise and my
                    skills in web development. I am constantly learning and seeking
                    new challenges to grow as a developer and contribute to exciting
                    projects.
                </p>
                <br />
                <div className="textRight">
                    <a
                        className="hover__Text"
                        href="https://github.com/vpgiang0205?tab=repositories"
                    > View more on my github...</a
                    >
                </div>
            </div>
        </section>
    );
}

export default Projects;
