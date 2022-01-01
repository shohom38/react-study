import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import styles from "./Movie.module.css";
import styled from "styled-components";


const MovieWrap = styled.div`
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 
                0 8px 16px -8px rgba(0, 0, 0, 0.3), 
                0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    background-color: #fff;
`;



const MovieTitle = styled.h2`
    margin: 0;
    text-decoration: none;

    & a {
        margin-bottom: 5px;
        font-size: 24px;
        color: #2c2c2c;
        text-decoration: none;
    }
`;

const Year = styled.h3`
    margin: 0;
    margin-right: 10px;
    font-size: 14px;
    text-decoration: none;
    vertical-align: middle;
    line-height: 14px;
`;

const CovImg = styled.img`
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 
                0 18px 36px -18px rgba(0, 0, 0, 0.3), 
                0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MovieGenr = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0;

    & li {
      margin-right: 8px;
      font-size: 16px;
    }
`

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <MovieWrap>
        <CovImg src={coverImg} alt={title} />
        <MovieTitle>
            <Link to={`/movie/${id}`}>{title}</Link>
        </MovieTitle>
        <Year>{year}</Year>
        <p>{summary.length > 200 ? `${summary.slice(0, 200)}....` : summary}</p>
        <MovieGenr>
            { genres && genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </MovieGenr>
    </MovieWrap>
    
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;