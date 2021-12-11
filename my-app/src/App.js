import axios from "axios";
import React from "react";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: { data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });  
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      return <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} />
    })}</div>;
  }
}

// function App() {
//   const [counter, setValue] = useState(0);
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log("i run all the time");
//   useEffect(() => {
//     console.log("CALL THE API....");
//   }, []);
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

export default App;
