import React from "react";
import PropTypes from "prop-types";
import "./About.css";


function About({rank, movieNm}) {
    console.log(rank, movieNm);
    return (
    <div className="about_container">
        <span>
        Come With Me !!!
        </span>
        <section className="page-content">
            <div className="contentContainer">
        {/* 반복해서 나옴 ㅋㅋㅋㅋ */}
                <h1>
                    {rank}위:{movieNm}
                </h1>
            </div>
            <div className="ratingContainer">
            <p>2222</p>
            </div>
        </section>
            <div className="inputContainer">
                <p>333</p>
            </div>
        <span>Movie App Practice, 2020</span>  
    </div>
    );
    
    About.propTypes = {
        rank : PropTypes.string.isRequired,
        movieNm : PropTypes.string.isRequired
    }

}

export default About;