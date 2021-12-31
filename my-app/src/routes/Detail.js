import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/Movie.module.css";


function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getDetail = async () => {
        const detail = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(detail.data.movie);
            setLoading(false);
    }
    useEffect(() => {
        getDetail();
    });
    // console.log(id);
    // console.log(movie.year);
    // console.log(movie);
    return (
        <div className={styles.container}>
            {loading ? (
                <h1>Loading...</h1>
                ) : (
                    <div>
                        <div className={styles.navWrap}>
                            <Link to={`/`}><span className={styles.link_span}>RANK HOME</span></Link>
                        </div>
                        <div className={styles.detail_cover}>
                            <h2 className={styles.movie_title}>{movie.title}</h2>
                            <h3 className={styles.movie_year}>{movie.year}</h3>
                            <img alt={movie.title} src={movie.medium_cover_image} />
                            <p>{movie.description_full}</p>
                        </div>
                    </div>
      )}
    </div>
  );
}

export default Detail;