import React, { useContext } from "react";
import { FavoriteContext } from "./App";
import { useHistory } from "react-router-dom";

function Favourites() {
  const fvrt = useContext(FavoriteContext);
  console.log("fav", fvrt.favMovies);
  const history = useHistory();
  return (
    <div>
      <h1>
        Favorites Page:{" "}
        {fvrt.favMovies.map((f) => {
          return (
            <div id="show" key={f.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${f.poster_path}`}
                alt="poster"
              />
              <h3> {f.title} </h3>
              <h3> {f.id} </h3>
            </div>
          );
        })}
      </h1>

      <button onClick={() => history.push("/")}>Go back</button>
    </div>
  );
}
export default Favourites;
