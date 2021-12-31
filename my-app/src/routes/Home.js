import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [genres, setGenre] = useState('');
    const rateGenr = `&genre=${genres}`
    const rateYear = `&sort_by=year`
    const arrGenre = ["Action", "Comedy", "Sci-Fi", "Adventure", "Animation", "Biography", "Crime", "Drama", "Family", "Music", "Romance"];
    const getMovies = async (genre) => {
        //클릭 시 장르 세팅
        setGenre(genre);
        // 처음
        const json = await (
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?${rateYear}${genres ? rateGenr : ''}`
            // `https://yts.mx/api/v2/list_movies.json?&sort_by=year`
        )
        ).json();
        console.log(genre);
        setMovies(json.data.movies);
        setLoading(false);
        // console.log(json.data.movies);
        // const movie = json.data.movies;
        // console.log(movie.map((item) => (item.genres)));
        // console.log(movie);
        // setGenre(movie.map((item) => (item.genres)));
      };
  //     const HandleGenre = async (e) => {
  //       const json = await (
  //         await fetch(
  //           `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&genre=${e}`
  //           )
  //           ).json();
  //           // console.log(arrGenre);
  //           console.log(e);
  //           console.log(json);
  //           setGenre(e);
  //           setMovies(json.data.movies);
  //           console.log(e);
  //           setLoading(false);
  // }
  useEffect(() => {
    getMovies(genres);
  }, [genres]);
  // console.log(movies);
  // console.log(genres);
  return (
        <div className={styles.container}>
          <div className={styles.navWrap}> 
            <h1 onClick={() => getMovies()}>RANK MOVIE</h1>
            <div>
              {arrGenre.map((item, index) => (
                  <button className={styles.navBtn} key={index} onClick={() => getMovies(item)}>{item}</button>
              ))}
            </div>
          </div>
            {loading ? (
                <h1>Loading...</h1>
                ) : (
                    <div className={styles.movies}>
                {movies.map((movie) => (
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    />
                ))}
        </div>
      )}
    </div>
  );
}
export default Home;
