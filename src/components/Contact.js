import React from "react";

export default function Contact(){
    return (
        <section class='contact'>
            <div class="form">
            <h1>contact me.</h1>
            <form action="contact me" />
                <h2>Send me an email.</h2>

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