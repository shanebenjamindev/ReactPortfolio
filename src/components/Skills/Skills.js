import React from 'react';
import './Skills.css'
const Skills = () => {
    let skills = ['HTML', 'CSS', 'SASS', 'JavaScript', 'jQuery', 'PHP', 'MVC', 'Git'];
    let knowledges = ["Reactjs", "Responsive Design", "Perfect Pixel"]
    return (
        <section id="skills">
            <div className="skills__Content myitem">
                <div className="hover__Overlay"></div>
                <div className="">
                    <h5 className='focus__Title'>Skills</h5>
                        <ul className="">
                            {skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                        <br />
                </div>

                <div className="">
                    <div className="hover__Overlay"></div>
                    <h5 className='focus__Title'>Knowledge</h5>
                    <span>(skills that i know but i am not master yet)</span>
                    <ul>
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
