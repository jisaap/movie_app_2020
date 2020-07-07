import React from "react";
import DetailView from "./DetailView";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <DetailView 
                    year={location.state.year} 
                    title={location.state.title} 
                    summary={location.state.summary} 
                    poster={location.state.poster}
                    genres={location.state.genres}
                />
            );
        }else {
            return null;
        }
    }
}

export default Detail;