import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
    <div className="about_container">
        <span>
        About this page: I bulit it I love movies.
        </span>
        <span>George Orwell, 1984</span>  
    </div>
    );
}

export default About;