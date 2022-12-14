import React from "react";
import joke from './images/joke.png';
import tech from './images/tech-blog.png';
import weather from './images/weatherDashboard.png';
import github from './images/githubRed.png';
import travel from './images/travel.png';


export default function Portfolio() {
	return (
		<section className="project">
			<h1>projects.</h1>
			<div className="cards">
				<div className="card">
					<a href="https://ris-travel-app1.herokuapp.com/login">
						<img src={travel} alt="Travel App" className="card-image" />
					</a>
					<div className="card-info">
						<h2>
							<a href="https://github.com/marissakrantz/react-travel-app"> Travel App</a>
						</h2>
						<div className='tech-repo'>
							<span className='techs'>React | Mongo | GraphQL </span>
						</div>
					</div>
				</div>
				<div className="card">
					<a href="https://marissakrantz.github.io/joke-generator/">
						<img src={joke} alt="Joke Generator project 1" className="card-image" />
					</a>
					<div className="card-info">
						<h2>
							<a href="https://github.com/marissakrantz/joke-generator">Joke Generator</a>
						</h2>
						<div className='tech-repo'>
							<span className='techs'>Javascript | API</span>
						</div>
					</div>
				</div>
				<div className="card">
					<a href="https://floating-waters-40237.herokuapp.com/login">
						<img src={tech} alt="Tech-Blog" className="card-image" />
					</a>
					<div className="card-info">
						<h2>
							<a href="https://github.com/marissakrantz/tech-blog">Tech Blog</a>
						</h2>
						<div className='tech-repo'>
							<span className='techs'>Node | SQL | Handlebars</span>
						</div>
					</div>
				</div>
				<div className="card">
					<a href="https://marissakrantz.github.io/weather-report/">
						<img src={weather} alt="Weather-Dashboard" className="card-image" />
					</a>
					<div className="card-info">
						<h2>
							<a href="https://github.com/marissakrantz/weather-report">Weather Dashboard</a>
						</h2>
						<div className='tech-repo'>
							<span className='techs'>Javascript | API</span>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
}