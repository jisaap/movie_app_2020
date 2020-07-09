import React from "react";
import About from "../components/About";
// import "./Charts.css";


const key = "d86c591b572c801bc6dc904564731a84";

const getDate = new Date();
const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
getDate.setTime(yDate);
let yYear = getDate.getFullYear();
let yMonth = getDate.getMonth() + 1;
let yDay = getDate.getDate() - 1;

if(yMonth < 10) {
    yMonth = "0" + yMonth;
}
if(yDay < 10) {
    yDay = "0" + yDay;
}
const resultDate = yYear + "-" + yMonth + "-" + yDay;
const res = resultDate.slice(0, 10).replace(/-/g, "");

class Chart extends React.Component {
    state = {};

    componentDidMount() {
        this.getCharts();
    }

    renderChart = () => {
        const charts = this.state.charts.map((dailyBoxOfficeList, index) => {
            return (
                <About
                    rank = { dailyBoxOfficeList.rank }
                    movieNm = { dailyBoxOfficeList.movieNm }
                    key = { index }
                    />
            );
        });
        return charts;
    }

    getCharts = async () => {
        const charts = await this.callApi();
        // console.log(charts);
        this.setState({
            charts
        });
    };

    callApi = () => {
        return fetch(
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${res}&itemPerPage=10`
          )
          .then(a => a.json())
          .then(json => json.boxOfficeResult.dailyBoxOfficeList)
          .catch(err => console.log(err));
    };
//  render 할때 한번에 넘기기 하나씩 넘어가서 UI 망가짐
    render() {
        const { charts } = this.state;
        return (
          <div className={charts ? "App" : "App-loading"}>
            {charts ? this.renderChart() : "로딩중 ..."}
          </div>
        );
    }
}
export default Chart;