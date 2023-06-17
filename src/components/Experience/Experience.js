import React from 'react';

const experienceData = [
    {
        id: 1,
        date: 'March 2022 - Present',
        role: 'Image Processing collaborator · FPT SOFTWARE',
        projects: [
            {
                name: 'Project: The Uniqlo\'s customer\'s tag, etc...',
                responsibilities: 'Responsibilities: Read customers comments in English and help training other teams.'
            }
        ],
        techStack: ['akaTask', 'english communication', 'pressure', 'teamwork', 'work independently']
    },
    {
        id: 2,
        date: 'Sep 2021 - Dec 2021',
        role: 'PHP WEB DEVELOPER · DH DIGITAL CO., LTD',
        projects: [
            {
                name: 'Build a medical equipment management website (MVC)',
                link: 'https://github.com/vpgiang0205/QuanLythietbiYte',
                responsibilities: 'Responsibilities: Front-end and Back-end CRUD (authorize, order, login, register, admins, customers, categories, orders).'
            },
            {
                name: 'Build a game management website (MVC)',
                link: 'https://github.com/vpgiang0205/VGgameStoreMVC_Only',
                responsibilities: 'Responsibilities: Front-end and Back-end CRUD (login, sign up, customers, users, admins, orders, categories).'
            }
        ],
        techStack: ['PHP', 'HTML', 'CSS', 'MVC', 'MySQL', 'teamwork', 'work independently']
    },
    {
        id: 3,
        date: 'Oct 2018 - Mar 2019',
        role: 'STAFF, FULLSTACK WEB DEVELOPER · HY COFFEE',
        projects: [
            {
                name: 'Build a watch management website',
                link: 'https://github.com/vpgiang0205/watchstore',
                responsibilities: 'Responsibilities: Full-Stack Web developer.'
            }
        ],
        techStack: ['PHP', 'HTML', 'CSS', 'MVC', 'MySQL', 'JS', 'work independently', 'english communication']
    }
    // Add more experience objects here
];

const Experience = () => {
    return (
        <section id="experiences" className="container">
            <h5 className="focus__Title">EXPERIENCE</h5>
            {experienceData.map((experience) => (
                <div className="myitem" key={experience.id}>
                    <div className="hover__Overlay"></div>
                    <div className="myitem__Content">
                        <p>{experience.date}</p>
                    </div>
                    <div className="myitem__Content">
                        <div>
                            <p>
                                <span className="focus__Text">{experience.role}</span><br />
                            </p>
                        </div>
                        <div>
                            {experience.projects.map((project, index) => (
                                <div key={index}>
                                    <p className="hover__Text">{project.name}<br />
                                        {project.responsibilities}
                                    </p>
                                    {project.link && (
                                        <a href={project.link} className="hover__Text">Github: View Source Code</a>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            <ul className="focus__Items">
                                {experience.techStack.map((tech, index) => (
                                    <li className="focus__Item" key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
