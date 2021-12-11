import React from "react";
import PropTypes from "prop-types";


function Movies({id, title, year, summary, poster}){
    return <h4>{title}</h4>;
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movies;