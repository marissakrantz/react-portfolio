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
        hamburger.classNameList.toggle("active");
        navMenu.classNameList.toggle("active");
    }
      
    function closeMenu() {
        hamburger.classNameList.remove("active");
        navMenu.classNameList.remove("active");
    }

  });    
  
  return (
    <header>
      <div>MK</div>
      <div id="navBar" className="mdl-navigation">
        <NavLink id="link-navbar" className="mdl-navigation__link" to="/React-Portfolio">Home</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link" to="/about">About</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link" to="/projects">Projects</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link" to="/curriculumvitae">CV</NavLink>
        <NavLink id="link-navbar" className="mdl-navigation__link" to="/contact">Contact</NavLink>
      </div>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
    </header>
  );
}