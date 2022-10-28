import React from "react";
import CV from './images/Resume Marissa K.pdf';

export default function Resume() {
    return (
        <section className='resume'>
            <div className="resume-txt">
				<h1>CV.</h1>
				<p>I am a Full Stack Web Developer with interest in front-end web development and am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
                <br/>
                <p>With each project, my aim is to best engage my audience for an impactful user experience.</p>
                <br />
                <p>
                    <span>If you are interested, you can downlaod a copy of my CV <a className='CVlink' href={CV} >[here]</a>.</span>
                </p>
			</div>            
        </section>
    );
  }