import React from "react";
import CV from './images/Resume Marissa K.pdf';

export default function Resume() {
    return (
        <section className='resume'>
            <div className="resume-txt">
				<h1>CV.</h1>
				<p>As an aspiring developer I am always looking for new opportunites to expand my knowledge and absorb as much information as possible.</p>
                <br />
                <p>
                    <span>If you are interested you can downlaod my CV <a className='CVlink' href={CV} >here</a>.</span>
                </p>
			</div>            
        </section>
    );
  }