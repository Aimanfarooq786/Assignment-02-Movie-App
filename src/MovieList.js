import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
export class MovieList extends Component {
  render() {
    return (
      <div>
        <div id="title">
          <h1>Movie App</h1>
        </div>
        <div id="show">
          {this.props.data.map((d, i) => {
            return (
              <ul>
                <li key={i} id="clr">
                  <Link to={`/movies/${i}`}>
                    <img src={d.Poster} alt="poster" />{" "}
                  </Link>
                  <h3> Title: {d.Title}</h3>
                  <p>
                    {" "}
                    <b id="yr">Year:</b> {d.Year}
                  </p>
                  <p>
                    {" "}
                    <b id="id">Id:</b> {d.imdbID}
                  </p>
                  <p>
                    {" "}
                    <b id="typ">Type:</b> {d.Type}
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
