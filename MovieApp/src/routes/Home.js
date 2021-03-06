import Movie from "../components/Movie.js";
import {useState, useEffect} from "react";


const Home=()=>{
const [load,setload]=useState(true);
const [movies,setmovies]=useState([]);
const getMovies =async()=>{
  const res = await fetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await res.json();
    setmovies(json.data.movies);
    setload(false);
};

useEffect(() => {
  getMovies();
},[]);

  
  return(
    <div>
    {load ? <h1>Loading...</h1>:
      <div>{movies.map((movie)=>
        <Movie 
        key={movie.id}
        id={movie.id}
        medium_cover_image={movie.medium_cover_image} 
        title={movie.title} 
        summary={movie.summary} 
        genres={movie.genres}
        />
      )}
      </div>
    }</div>
  )}

export default Home;