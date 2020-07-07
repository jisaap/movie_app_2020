import React from "react";
import PropTypes from "prop-types";
import "./DetailView.css";


function DetailView({year, title, summary, poster, genres}) {

    return (
        <div className="containerView">
            <img src={poster} alt={title} title={title} />
            <div className="movieView_data">
                <h3 className="movieView_title">{title}</h3>
                <h5 className="movieView_year">{year}</h5>
                <ul className="movieView_genres">
                    {genres.map((genre, index )=> ( 
                    <li key={index} className="genresView_genre">
                        {genre}
                    </li>
                    ))}
                    </ul>
                <p className="movieView_summary">{summary}</p>
            </div>
        </div>
    );
}

DetailView.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DetailView;