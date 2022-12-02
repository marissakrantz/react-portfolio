import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {

  useEffect(() => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#navBar");
    const navLink = document.querySelectorAll("#link-navbar");
      
    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
      
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
      
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

  });    
  
  return (
    <header>
      <div>MT</div>
      <div id="navBar" className="mdl-navigation">
        <NavLink id="link-navbar" className="mdl-navigation__link active" to="/React-Portfolio">Home</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link active" to="/about">About</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link active" to="/projects">Projects</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link active" to="/curriculumvitae">CV</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link active" to="/contact">Contact</NavLink>
      </div>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
    </header>
  );
}