// import axios from "axios";
// import React from "react";
// import Movie from "./Movie";

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };
//   getMovies = async () => {
//     const {data: { data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//     this.setState({ movies, isLoading: false });  
//   }
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return <div>{isLoading ? "Loading..." : movies.map(movie => {
//       console.log(movie);
//       return <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} />
//     })}</div>;
//   }
// }

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

// export default App;

import { useEffect, useState } from "react";

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange =  (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   }

//   console.log(toDos);

//   return <div>
//     <h1>My To Dos! ({toDos.length})</h1>
//     <form onSubmit={onSubmit}>
//       <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
//       <button >Add To Do</button>
//     </form>
//     <hr />
//     <ul>
//       {toDos.map((item, index) => <li key={index}>{item}</li>)}
//     </ul>
//   </div>
// }

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : (
        <select>
          {coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
      </select>)}
    </div>

  )

}

export default App;