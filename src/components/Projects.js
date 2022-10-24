import React from "react";
import joke from './images/joke.png';
import tech from './images/tech-blog.png';
import weather from './images/weatherDashboard.png';
import github from './images/githubRed.png';
import travel from './images/';


export default function Portfolio() {
    return (
        <section class="project">
			<h1>projects.</h1>
			<div class="cards">
				<div class="card">
					<a href="">
						<img src={travel} alt="Travel App" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Travel App</h2>
							<div class='tech-repo'>
								<span class='techs'>React | Mongo | GraphQL</span>
								<a href="https://github.com/marissakrantz/react-travel-app">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>
				<div class="card">
					<a href="https://marissakrantz.github.io/joke-generator/">
						<img src={joke} alt="Joke Generator project 1" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Joke Generator</h2>
							<div class='tech-repo'>
								<span class='techs'>Javascript | API</span>
								<a href="https://github.com/marissakrantz/joke-generator">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>
				<div class="card">
					<a href="https://ris-tech-blog.herokuapp.com/">
						<img src={tech} alt="Tech-Blog" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Tech Blog</h2>
							<div class='tech-repo'>
								<span class='techs'>Node | SQL | Handlebars</span>
								<a href="https://github.com/marissakrantz/tech-blog">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>			
				<div class="card">
					<a href="https://marissakrantz.github.io/weather-report/">
						<img src={weather} alt="Weather-Dashboard" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Weather Dashboard</h2>
							<div class='tech-repo'>
								<span class='techs'>Javascript | API</span>
								<a href="https://github.com/marissakrantz/weather-report">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>														
			</div>

		</section>
    );
}