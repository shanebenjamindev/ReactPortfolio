import React from 'react';
import './Skills.css'
const Skills = () => {
    let skills = ['HTML', 'CSS', 'SASS', 'JavaScript', 'jQuery', 'RestfulApi', 'PHP', 'Responsive', 'MVC', 'Git'];
    let knowledges = ["Reactjs", "Perfect Pixel"]
    return (
        <section id="skills">
            <div className="skills__Content myitem">
                <div className="hover__Overlay"></div>
                <div className="">
                    <h5 className='focus__Title'>Skills</h5>
                    <ul className="flex">
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                    <br />
                </div>
                <div className="">
                    <div className="hover__Overlay"></div>
                    <h5 className='focus__Title'>Knowledge</h5>
                    <ul className='flex'>
                        {knowledges.map(knowledge => (
                            <li key={knowledge}>{knowledge}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Skills;
