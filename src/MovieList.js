import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

export class MovieList extends Component {
  constructor(props) {
    super(props);

     this.state = {
      movieList: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a07dba856632c11465f0e933f170c48a&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data.results);
        this.setState({ movieList: response.data.results });
      })

      .catch((error) => {
        console.log("ERROR");
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
