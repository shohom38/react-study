import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [genres, setGenre] = useState([]);
    const arrGenre = ["Action", "Comedy", "Sci-Fi"];
    const getMovies = async () => {
        const json = await (
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
  const HandleGenre = async () => {
      const json = await (
          await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&genre=${arrGenre}`
          )
      ).json();
      console.log(arrGenre);
  }
  useEffect(() => {
    getMovies();
    HandleGenre();
  }, []);
  console.log(movies);
  console.log(genres);
  return (
        <div className={styles.container}>
          <div> 
              {arrGenre.map((item, index) => (
                  <button key={index} onClick={HandleGenre}>{item}</button>
              ))}
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
