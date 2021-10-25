import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import { FavoriteContext } from "./App";


//export const FavoriteContext= React.createContext();

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');
  
  
  const fvrt = useContext(FavoriteContext);
  let history= useHistory()

  useEffect(() => {
    
    axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a07dba856632c11465f0e933f170c48a&language=en-US&page=1`
    )
    .then((response) => {
      setMovieList(response.data.results );
      //console.log(movieList)
    })

    .catch((error) => {
      console.log("ERROR"+ error);
    });
  },[])

  // Call to set the search value
  const onInputChangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a07dba856632c11465f0e933f170c48a&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    
    .then((response) => {
      console.log(response);
      setMovieList(response.data.results);

    })
    .catch((err) =>{
      console.log("error here", err)
    })
  }
  console.log("MOvies list" , movieList);

          //To add movies into favorite section
     const onClickFavorite= (fvrtData) => {
      console.log("FAVOURITEe" , fvrtData.d.title); 
      console.log(fvrt.favMovies);
      fvrt.setFavMovies( fvrt.favMovies.concat(fvrtData.d))
      history.push("/favorites"  )
        }

  return (
    <div>
      <div id="title">
        <h1>Movie App</h1>
        <Link id="fvrt" to="/favorites"> Favorites </Link>
        <input type="text" placeholder="Search by Name" onChange = {onInputChangeHandler} value={search}  />
      </div>
       
      <div id="show">
        {movieList.map((d, i) => {
          return (
            <ul>
              <li key={i} id="clr">
                <Link to={`/movies/${d.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt="poster" />
                </Link>
                <h3> Title: {d.title}</h3>
                <p>
                  <b id="yr">Release Date:</b> {d.release_date}
                </p>
                <p>
                  <b id="id">Id:</b> {d.id}
                </p>
                <p>
                  <b id="typ">Language:</b> {d.original_language}
                </p>
              
                <button key={d.id} onClick= {() => onClickFavorite({d}) } >
                  Add To Favorites
                  </button>
                  
              </li>
            </ul>
          );
        })}

      </div>

    </div>
  );
        
}

export default MovieList
