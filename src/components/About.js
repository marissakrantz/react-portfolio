import React from "react"
import photo from './images/Avatar.png';

const About = () => (
    <section id="about" className="about">
        <div className="about-txt">
            <h1>about me.</h1>
            <p className="intro">I'm a Full Stack Web Developer based in Perth, Western Australia.</p>
            <br />
            <p className="description">I found interest in web development after growing bored in my previous positions and seeing how challenging web development can be.</p>
            <br />
            <p className="description">I have a Bachelor of Arts Degree in Social Sciences as well as a Certificate in Full Stack Development from the University of Western Australia.</p>
            <br />
            <p className="description">Other than creating projects for my portfolio you'll find me at the beach or lounging on my patio.</p>
        </div>
        <div className="photo">
            <img src={photo} alt="Marissa Krantz" className="photo-me" />
        </div>
    </section>
);

export default About;