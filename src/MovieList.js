import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import "./Style-component/MovieList.css";
import { connect } from "react-redux";
import { addToFav } from "./services/Actions/action";

function MovieList(props) {
  console.log("favmovieeelist", props);
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a07dba856632c11465f0e933f170c48a&language=en-US&page=1`
      )
      .then((response) => {
        setMovieList(response.data.results);
      })

      .catch((error) => {
        console.log("ERROR" + error);
      });
  }, []);

  // Call to set the search value
  const onInputChangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a07dba856632c11465f0e933f170c48a&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )

      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      })
      .catch((err) => {
        console.log("error here", err);
      });
  };

  console.log("moviess", movieList);
  return (
    <div>
      <div className="title">
        <h1>Movie App</h1>
        <Link className="btn btn-danger" to="/favorites">
          {" "}
          Favorites{" "}
        </Link>
        <input
          type="text"
          placeholder="Search by Name"
          onChange={onInputChangeHandler}
          value={search}
        />
      </div>

      <div
        className="container-fluid "
        style={{ backgroundColor: "burlywood" }}
      >
        <div className="row">
          {movieList.map((d, i) => {
            return (
              <div className="col-3 py-3 px-5  ">
                <div className="card" style={{ width: "24rem" }}>
                  <Link to={`/movies/${d.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                      alt="poster"
                      className="card-img-top"
                    />
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title ">Title: {d.title}</h5>
                    <p className="card-text">
                      <p>
                        <b id="yr">Release Date:</b> {d.release_date}
                      </p>
                      <p>
                        <b id="id">Id:</b> {d.id}
                      </p>
                      <p>
                        <b id="typ">Language:</b> {d.original_language}
                      </p>

                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          props.addToFavHandler(d);
                        }}
                      >
                        Add To Favorites
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToFavHandler: (data) => dispatch(addToFav(data)),
});
export default connect(null, mapDispatchToProps)(MovieList);
