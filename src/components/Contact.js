import React from "react";

export default function Contact(){
    return (
        <section className='contact'>
            <div className="form">
            <h1>contact me.</h1>
            <form action="contact me" />

                <label for="name">Name</label>
                <input type="text" id="name" name="fullname" placeholder="Your full name.." />

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.." />

                <label for="message">Message</label>
                <textarea type="text" id="message" name="message" placeholder="Your message.."></textarea>
        
                <input type="submit" value="Submit" />
                <form />
            </div>
        </section>
    );
};