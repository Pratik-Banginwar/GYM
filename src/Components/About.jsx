import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt nemo minus exercitationem,
                eius dolor quos soluta vero deleniti cumque. Unde molestias iure, omnis enim officiis tempora voluptatibus
                harum nesciunt mollitia voluptatum nobis similique ipsa ducimus inventore maxime praesentium! Expedita 
                dolor quo odio culpa soluta aliquam fugiat maxime nihil voluptates?
            </p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default About