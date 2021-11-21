import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter,  Link } from "react-router-dom";

function MovieDescription(props) {
  const [descData, setDescData] = useState([]);
  
  useEffect(() => {
    const moviesId = props.match.params.movieId;
    axios.get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=a07dba856632c11465f0e933f170c48a&language=en-US`)
    .then(details =>{
      console.log(details.data);
      setDescData(details.data);
      console.log(descData);
    })
    .catch(error =>{
      console.log('ERROR FOUND');
    })
  })

    return (
      <div id="description">
                         <h1 style= {{color:'red', fontStyle: 'oblique', fontFamily: 'fantasy'}}> <center>MOVIE DETAIL</center></h1>
                <h1 id="home"> {descData.title}   </h1> <br/><br/>
                <img src= {`https://image.tmdb.org/t/p/w500${descData.poster_path}`} alt="poster" />
                <p><b class="bold" >Overview</b> <br/><br/> {descData.overview}  </p> <br/><br/>
                <p> <b class="bold">Release Date: </b>   {descData.release_date}</p> <br/><br/>
                <p> <b class="bold">Popularity: </b>   {descData.popularity}</p> <br/><br/>
       
                <div  className= "btn btn-warning" >
                <Link  to= {`/movies/${descData.id}/reviews`}> <b> Show Reviews </b> </Link>
                </div>
      </div>
    );
  
}

export default withRouter(MovieDescription);
