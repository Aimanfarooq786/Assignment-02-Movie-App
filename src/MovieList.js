import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { PIC_URL } from "./Url";

export class MovieList extends Component {
  constructor(props) {
    super(props);

     this.state = {
      movieList: [],
    };
  }
  componentDidMount() {
   console.log("ENV", process.env);
    axios
      .get(
         `${process.env.REACT_APP_MOVIELIST_API}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        //`${process.env.REACT_APP_MOVIELIST_API}`
       // process.env.REACT_APP_MOVIELIST_API
      )
      .then((response) => {
        console.log(response.data.results);
        this.setState({ movieList: response.data.results });
      })

      .catch((error) => {
        console.log("Movielist ERROR", error);
      });
  }

  render() {
    const { movieList } = this.state;
    return (
      <div>
        <div id="title">
          <h1>Movie App</h1>
        </div>

        <div id="show">
          {movieList.map((d, i) => {
            return (
              <ul>
                <li key={i} id="clr">
                  <Link to={`/movies/${d.id}`}>
                    <img src={`${PIC_URL}${d.poster_path}`} alt="poster" />
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
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
