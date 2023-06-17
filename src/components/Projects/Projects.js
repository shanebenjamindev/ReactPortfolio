import React from 'react';
import pro1 from '../../assets/img/1.png';
import pro3 from '../../assets/img/2.png';
import pro2 from '../../assets/img/5.bmp';
import proApi from '../../assets/img/projectApi.jpeg';
import './Projects.css';

const projectArr = [
    {
        id: 1,
        name: 'API Product Store',
        img: proApi,
        desc: 'My role is design the layout, function for user interface ensuring a smooth and intuitive experience for users when shopping.',
        code: 'https://github.com/vpgiang0205/CapstoneAPI',
        techStack: ['HTML', 'CSS', 'JavaScript', 'RESTful API', 'Bootstrap', 'Local Storage', 'Responsive'],
    },
    {
        id: 2,
        name: 'Capstone Restaurant',
        img: pro1,
        desc: 'A fully responsive website for a restaurant with an elegant design and user- friendly interface and it is optimized for mobile devices.',
        code: 'https://github.com/vpgiang0205/CapstoneProject',
        techStack: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'CSS Animation', 'Responsive'],
    },
    {
        id: 3,
        name: 'Capstone SAMAR',
        img: pro2,
        desc: 'The Samar project boasts a friendly design that is easy on the eyes and incorporates smooth animations to enhance the user experience.',
        code: 'https://github.com/vpgiang0205/SAMAR',
        techStack: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'CSS Animation'],
    },
    {
        id: 4,
        name: 'Portfolio',
        img: pro3,
        desc: '  Have a contact form that allows visitors to send messages directly to me, easy for potential clients or employers to reach out.',
        code: 'https://github.com/vpgiang0205/portfoliothefinal',
        techStack: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'Responsive'],
    }
    // Add more project objects here
];

const Projects = () => {
    return (
        <section id="projects">
            <h5 className="focus__Title">PERSONAL PROJECTS</h5>

            {projectArr.map((project) => (
                <a href={`https://example.com/${project.id}`} key={project.id}>
                    <div className="myitem">
                        <div className="hover__Overlay"></div>
                        <div className="myitem__Content">
                            <img src={project.img} alt="" />
                        </div>
                        <div className="myitem__Content">
                            <div>
                                <p className="hover__Text">
                                    <span className="focus__Text">{project.name}</span>
                                    <br />
                                    {project.desc}
                                    <br />
                                </p>
                            </div>
                            <div className="hover__Text">Github:<a href={project.code}> View source code of {project.name}</a>
                            </div>
                            <div>
                                <ul className="focus__Items">
                                    {project.techStack.map((tech) => (
                                        <li className="focus__Item" key={tech}>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
            ))}

            <div>
                <p className="hover__Text">
                    I am currently working on React project. If I can be given the opportunity to work in a supportive and challenging workplace, I am confident that I can further enhance my expertise and my skills in web development. I am constantly learning and seeking new challenges to grow as a developer and contribute to exciting projects.
                </p>
                <br />
                <div className="textRight">
                    <a className="hover__Text" href="https://github.com/vpgiang0205?tab=repositories">
                        View more on my GitHub...
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
