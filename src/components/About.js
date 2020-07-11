import React from "react";
// import PropTypes from "prop-types";
import "./About.css";


// function About({rank, movieNm}) {
function About({charts}) {
    console.log(charts[0]);
    return (
    <div className="about_container">
        <span>
        Come With Me !!!
        </span>
        <section className="page-content">
            <div className="contentContainer">
                <ul className="movie_charts">
                    {charts.map((chart) => (
                         <li key={chart.rnum} className="charts_chart">
                              {chart.rank}위 : {chart.movieNm}
                              
                            <span className="chart_dec" id={getColor(chart.rankInten)}>
                                {/* {chart.rankInten} */}
                                 {getRate(chart.rankInten)}
                            </span>
                        </li> 
                     ))} 
                     
                </ul>
            </div>
            <div className="ratingContainer">
            <p>날씨?</p>
            </div>
        </section>
            <div className="inputContainer">
                <p>영화관 위치?</p>
            </div>
        <span>Movie App Practice, 2020</span>  
    </div>
    );
    
    function getRate(rate) {
        let result;
        if(rate > 0) {
            result = "⇑ " +rate;
        }else if(rate < 0) {
            result = "⇓ " + rate.slice(1,3);
        }else {
            result = "-";
        }
        return result;
    }

    function getColor(rate) {
        let result;
        if(rate > 0) {
            result = "col_blu";
        }else if(rate < 0) {
            result = "col_red";
        }else {
            result = "col_gra";
        }
        return result;
        
    }
    // About.propTypes = {
    //     // rank : PropTypes.string.isRequired,
    //     // movieNm : PropTypes.string.isRequired
    //     // chart : PropTypes.arrayOf(PropTypes.string).isRequired
        // chart: PropTypes.arrayOf(PropTypes.).isRequired
    // }

}

export default About;