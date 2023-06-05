import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <section id="education" className='container'>
            <h5 className='focus__Title'>Education</h5>

            <div className=''>
                <a href="https://cybersoft.edu.vn/" className='myitem'>
                    <div className='  hover__Text'>
                        <div className="hover__Overlay"></div>
                        <span className='focus__Text'>CYBERSOFT ACADEMY</span>
                        <p>course: FE Web Developer <br /> March 2013 - Present</p>
                    </div>
                </a>

                <a className=' myitem ' href="https://en.ctuet.edu.vn/">
                    <div className=' hover__Text'>
                        <div className="hover__Overlay"></div>
                        <span className='focus__Text'>CAN THO UNIVERSITY OF TECHNOLOGY</span>
                        <p>major: Infomation System <br /> Sep 2018 - Sep 2022</p>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Education;