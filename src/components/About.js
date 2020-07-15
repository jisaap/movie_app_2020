import React, {Suspense} from "react";
import Map from "./Map.js";
import "./About.css";

const Weather = React.lazy(() => 
import("./Weather.js"));

function About({charts}) {
    return (
    <div className="about_container">
        <section className="page-content">
            <div className="contentContainer">
                <ul className="movie_charts">
                    <p>
                    실시간 영화 순위
                    </p>
                    {charts.map((chart) => (
                         <li key={chart.rnum} className="charts_chart">
                              {chart.rank}위 : {chart.movieNm.length > 20? chart.movieNm.slice(0,20) + "..." : chart.movieNm}
                              
                            <span className="chart_dec" id={getColor(chart.rankInten)}>
                                 {getRate(chart.rankInten)}
                            </span>
                        </li> 
                     ))} 
                     
                </ul>
            </div>
            
                <Suspense fallback={<div>Loading...</div>}>
                    <Weather />
                </Suspense>
        </section>
            <div className="inputContainer">
                <Map 
                />
            </div>
        <div>
            <span>Movie App Practice, 2020</span>  
        </div>
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

}

export default About;