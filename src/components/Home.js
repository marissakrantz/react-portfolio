import React from "react";
import Avatar from './images/avatar1.png';
import github from './images/githubRed.png';
import linkedin from './images/linkedinRed.png';

const Home = () => (
      <div style={{width: "100%", margin: "0 auto"}}>
        <div id="home-page-grid">
            <div className="image-container">
              <img
                className="avatar1-img"
                src={Avatar}
                alt="Avatar Pic"
              />
            </div>
            <div className="banner-text">
              <h1>Marissa Krantz</h1>
              <h2>Full Stack Web Developer</h2>
              <hr />
              <p> JavaScript | SQL | React | HTML | CSS | GraphQL | Git | Mongo </p>
            <div className="social-links">
            <a href="https://github.com/marissakrantz" target="_blank" rel="noopener noreferrer" className="icons">
			        <img src={github} alt="red github icon" className="icon-img" />
			      </a>
            <a href="https://www.linkedin.com/in/marissa-tobin-0b0713b8/" target="_blank" rel="noopener noreferrer" className="icons">
				      <img src={linkedin} alt="red linkedin icon" className="icon-img" />
			      </a>
            </div>
          </div>
        </div>
      </div>
    );

export default Home;