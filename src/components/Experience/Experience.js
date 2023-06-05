import React from "react";

const Experience = () => {
    return(
        <section id="experiences" className="container">
            <h5 className="focus__Title">EXPERIENCE</h5>
            <div className="myitem">
                <div className="hover__Overlay"></div>
                <div className="myitem__Content"><p>March 2022 - Present</p></div>
                <div className="myitem__Content">
                    <div>
                        <p>
                            <span className="focus__Text"
                            >Image Processing collaborator · FPT SOFTWARE</span
                            >
                            <br />
                            Project: The Uniqlo's customer's tag, etc... <br />
                            Responsibilities: Read customers comments in English and
                            help training other teams. <br />
                        </p>
                    </div>

                    <div>
                        <ul className="focus__Items">
                            <li className="focus__Item">akaTask</li>
                            <li className="focus__Item">english comunicate</li>
                            <li className="focus__Item">pressure</li>
                            <li className="focus__Item">team work</li>
                            <li className="focus__Item">work independently</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="myitem">
                <div className="hover__Overlay"></div>
                <div className="myitem__Content"><p>Sep 2021 - Dec 2021</p></div>
                <div className="myitem__Content">
                    <div>
                        <p>
                            <span className="focus__Text">
                                PHP WEB DEVELOPER · DH DIGITAL CO., LTD</span
                            >
                            <br />
                            <a
                                className="hover__Text"
                                href="https://github.com/vpgiang0205/QuanLythietbiYte"
                            >
                                Project: Build a medical equipment management website
                                (MVC)

                                <br />
                                Responsibilities: Front-end and Back-end CRUD (authorize,
                                order, login, register, admins, customers, categories,
                                orders).
                            </a>
                        </p>

                        <p>
                            <a
                                className="hover__Text"
                                href="https://github.com/vpgiang0205/VGgameStoreMVC_Only"
                            >Project: Build a game management website (MVC)
                                <br />
                                Responsibilities: Front-end and Back-end CURD (login, sign
                                up, customers, users, admins, orders, categories). <br />
                            </a>
                        </p>
                    </div>

                    <div>
                        <ul className="focus__Items">
                            <li className="focus__Item">PHP</li>
                            <li className="focus__Item">HTML</li>
                            <li className="focus__Item">CSS</li>
                            <li className="focus__Item">MVC</li>
                            <li className="focus__Item">MySQL</li>
                            <li className="focus__Item">team work</li>
                            <li className="focus__Item">work independently</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="myitem">
                <div className="hover__Overlay"></div>
                <div className="myitem__Content"><p>Oct 2018 - Mar 2019</p></div>
                <div className="myitem__Content">
                    <div>
                        <p>
                            <span className="focus__Text">
                                STAFF, FULLSTACK WEB DEVELOPER · HY COFFEE</span
                            >
                            <br />
                            <a
                                className="hover__Text"
                                href="https://github.com/vpgiang0205/watchstore"
                            >
                                Project: Build a watch management website
                                <br />
                                Responsibilities: Full-Stack Web developer. <br />
                            </a>
                        </p>
                    </div>

                    <div>
                        <ul className="focus__Items">
                            <li className="focus__Item">PHP</li>
                            <li className="focus__Item">HTML</li>
                            <li className="focus__Item">CSS</li>
                            <li className="focus__Item">MVC</li>
                            <li className="focus__Item">MySQL</li>
                            <li className="focus__Item">JS</li>
                            <li className="focus__Item">work independently</li>
                            <li className="focus__Item">english comunicate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience