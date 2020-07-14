import React from "react";
import PropTypes from "prop-types";
import "./WeatherView.css";
import {WiCloud} from "react-icons/wi";
import {GiStoneSphere} from "react-icons/gi";
import {WiDayThunderstorm} from "react-icons/wi";
import {FiCloudDrizzle} from "react-icons/fi";
import {FiCloudRain} from "react-icons/fi";
import {FiCloudSnow} from "react-icons/fi";
import {FiSun} from "react-icons/fi";
import {WiDayHaze} from "react-icons/wi";
import {RiMistLine} from "react-icons/ri";
import {WiDust} from "react-icons/wi";

const weatherIcon = "AiFillCloud"
function WeatherView({ temp, condition }) {
    
    console.log(condition);

    return (
        <div className="ratingContainer" id={condition}>
            <div className={condition} >
                {getIcon(condition)}
                <h2>{temp}˚</h2>
                {getComent(condition)}
            </div>
        </div>
    );
}

function getComent(con) {
    return (con ==="Clouds"?<p>Moisture supply</p>:
    con === "Thunderstorm"?<p>Actually, outside of the house</p>:
    con ==="Drizzle"?<p>It's like rain, but gay</p>:
    con === "Rain"?<p>It's Rain!</p>:
    con === "Snow"?<p>Look's like Frozen!</p>:
    con === "Atmosphere"?<p>I don't know this weather</p>:
    con === "Clear"?<p>Nice!</p>:
    con === "Haze"?<p>Just don't go outside.</p>:
    con === "Mist"?<p>It's like you have no glasses on.</p>:
    con === "Dust"?<p>Thanks a lot China</p>:<p>....</p>

    );
}


function getIcon(con) {
    return (
           con ==="Clouds"?<WiCloud size="3em"/>:
           con === "Thunderstorm"?<WiDayThunderstorm size="3em" />:
           con ==="Drizzle"?<FiCloudDrizzle size="3em" />:
           con === "Rain"?<FiCloudRain size="3em" />:
           con === "Snow"?<FiCloudSnow size="3em" />:
           con === "Atmosphere"?<GiStoneSphere size="3em" />:
           con === "Clear"?<FiSun size="3em" />:
           con === "Haze"?<WiDayHaze size="3em" />:
           con === "Mist"?<RiMistLine size="3em" />:
           con === "Dust"?<WiDust size="3em" />:<h1>이미지를 설정해 주세요.</h1>
    );
}
WeatherView.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}


export default WeatherView;