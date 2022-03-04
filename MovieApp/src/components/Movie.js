import PropTypes from "prop-types";
import {Link,} from "react-router-dom";

const Movie=({medium_cover_image,title,summary,genres,id})=>{ 
  return(
      <div>
      <img src={medium_cover_image}/>
      <h2><Link to ={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary.length > 240 ? `${summary.slice(0,240)}...`:summary}</p>
      <ul>
        {genres.map(g=><li key={g}>{g}</li>)}
      </ul>
      </div>
      
    );
}

Movie.propTypes={
    id:PropTypes.number,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Movie;