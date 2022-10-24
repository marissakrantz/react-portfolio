import React from "react";
import CV from '';

export default function Resume() {
    return (
        <section class='resume'>
            <div class="resume-txt">
				<h1>CV.</h1>
				<p>As an aspiring developer I am always looking for new opportunites to expand my knowledge and absorb as much information as possible.</p>
                <br />
                <p>
                    <span>If you are interested you can downlaod my CV <a class='CVlink' href={CV} >here</a>.</span>
                </p>
			</div>            
        </section>
    );
  }