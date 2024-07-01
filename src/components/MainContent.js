import React from 'react';
import './MainContent.css';
import fullStackImg from '../assets/back-end-dev-img.png';
import frontEndImg from '../assets/back-end-dev-img.png';
import backEndImg from '../assets/back-end-dev-img.png';
import mobileAppImg from '../assets/back-end-dev-img.png';
import workshopImage from '../assets/medium-shot-people-learning.png';
import impressiveStatsBg from '../assets/bg.png';

const MainContent = () => {
    const courses = [
        {
            title: "Full-Stack Development Course",
            img: fullStackImg,
            tags: ["Online", "Offline", "4 Months"]
        },
        {
            title: "Front-End Development Course",
            img: frontEndImg,
            tags: ["Online", "Offline", "4 Months"]
        },
        {
            title: "Back-End Development Course",
            img: backEndImg,
            tags: ["Online", "Offline", "4 Months"]
        },
        {
            title: "Mobile App Development Course",
            img: mobileAppImg,
            tags: ["Online", "Offline", "4 Months"]
        }
    ];

    return (
        <div className="main-content">
            <div className="hero-section">
                <div className="hero-text">
                    <p style={{color:'red'}}>Launching Your Career for the Next Sphere</p>
                    <h1>Redefining the Next Generation of Skill Development and Career Launch</h1>
                    <p>Experience the Education revolution with Flexible Fees, Dynamic Curriculum, and transformative Experiences for Limitless Growth.</p>
                    <button>Enroll Now</button>
                </div>
                <div className="course-list">
                    {courses.map(course => (
                        <div className="course-card" key={course.title}>
                            <img src={course.img} alt={course.title} />
                            <h3>{course.title}</h3>
                            <div className="tags">
                                {course.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <button>View Details</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="stats-section" >
                <div className="stats-text" >
                    <h2>Impressive Stats</h2>
                </div>
                <div className="stats-cards">
                    <div className="stats-card red-bg">
                        <h3>252</h3>
                        <p>No. of Students</p>
                    </div>
                    <div className="stats-card blue-bg">
                        <h3>112</h3>
                        <p>Hiring Partners</p>
                    </div>
                    <div className="stats-card white-bg">
                        <h3>10L</h3>
                        <p>Average Salary</p>
                    </div>
                </div>
            </div>
            <div className="hero-section">
                <div className="hero-image">
                    <img src={workshopImage} alt="Workshop" />
                </div>
                <div className="hero-text1">
                    <h2>Experience The Workshop for Free</h2>
                    <p>
                        Discover the realm of Graphic Design, Manual Testing, and Full Stack
                        Development in our free workshop. Join experts as they unveil the art
                        of coding, design, and innovation. Whether you're a beginner or an
                        enthusiast, dive into live demos, real projects, and a world of
                        possibilities. Reserve your spot today, next workshop starting on 29th
                        March 2024, from 9:00AM To 1:00PM.
                    </p>
                    <button>Join Now</button>
                </div>
            </div>
            
            
            <div className="contact-section">
                <div className="contact-text">
                    <h2>Contact Us</h2>
                    <p>If you have any inquiries or need further information, please don't hesitate to get in touch. Our dedicated team is ready to help you on your path to tech excellence.</p>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="tel" placeholder="Phone Number" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MainContent;
