import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './experience.css';

const experience = () => {
    return (
        <section id="experience" className='container about'>
            <h4 className="stat-title">My Experience</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"><FaBriefcase /></i>
                    </div>
                    <p className="tl-duration">March, 2022 - Prresent</p>
                    <h5>Web Developer<span> - Rubico IT</span></h5>
                    <p>
                        I am working here as a core WordPress Developer.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"><FaBriefcase /></i>
                    </div>
                    <p className="tl-duration">Oct, 2021 - Dec, 2011</p>
                    <h5>Python Developer<span> - The Enterpreneurship Network</span></h5>
                    <p>
                        I was working there as a Python Trainee.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"><FaBriefcase /></i>
                    </div>
                    <p className="tl-duration">Sep, 2021 - Oct, 2021</p>
                    <h5>Marketing Intern<span> - Tutedude</span></h5>
                    <p>
                        I was working there as a Marketing Trainee.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"><FaBriefcase /></i>
                    </div>
                    <p className="tl-duration">Apr, 2021 - July, 2021</p>
                    <h5>Business Developer<span> - Taare Zameen Foundation</span></h5>
                    <p>
                        I was working there as a Business Developer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default experience