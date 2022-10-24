import React from "react"
import photo from './images/Avatar.png';

const About = () => (
    <section id="about" className="about">
        <div className="about-txt">
            <h1>about me.</h1>
            <p className="intro">I'm an aspiring Full Stack Web Developer based in Perth, Western Australia.
                I found interest in web development after growing bored in my current position and seeing all
                the tech world has to offer.</p>
            <p className="description">I have a Bachelors in Social Sciences from the University I went to in Minnesota but am now currently enrolled in a web development bootcamp with UWA.I am excited for a career path more suited to my interests.</p>
            <br />
            <p className="description">With each project, my aim is to best engage my audience for an impactful user experience. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
            <br />
            <p className="description">Other than creating projects for my portfolio you'll find me at the beach or lounging on my patio.</p>
        </div>
        <div className="photo">
            <img src={photo} alt="Marissa Krantz" className="photo-me" />
        </div>
    </section>
);

export default About;