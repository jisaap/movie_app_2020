import React from "react";
import axios from "axios";
import Loading from "./Loading";
import WeatherView from "./WeatherView";


const API_KEY = "17e7eb67e2c598d3d738dbb0db0a289f";

class Weather extends React.Component {
    
    state = {
        isLoading: true
    };

    
    getLocation() {
        console.log("get Location");
        navigator.geolocation.getCurrentPosition(this.getWeather);
    };
    
    getWeather = async (position) => {
        console.log(position);
        console.log("도착");
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        const result = await axios.get (
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        console.log(result);
        this.setState({
            isLoading: false,
            condition: result.data.weather[0].main,
            temp: result.data.main.temp
        });
    };
    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading, temp, condition } = this.state
        console.log(isLoading, temp, condition);
        return isLoading ? (
            <Loading />
        ) : (
            <WeatherView temp={Math.round(temp)} condition={condition} />
        );
    }
    }


export default Weather;