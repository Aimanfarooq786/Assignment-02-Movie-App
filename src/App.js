//import data from "./Data";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./MovieList";
import MovieDescription from "./MovieDescription";
import ReviewsData from "./ReviewsData";
import Favorites from "./Favourites";

export const FavoriteContext = React.createContext([1, 2, 3]);

function App() {
  const [favMovies, setFavMovies] = useState([]);
  return (
    <div className="App">
      <FavoriteContext.Provider value={{ favMovies, setFavMovies }}>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/movies" exact>
            <MovieList />
          </Route>

          <Route path="/movies/:movieId" exact>
            <MovieDescription />
          </Route>

          <Route path="/movies/:movieId/reviews" exact>
            <ReviewsData />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </FavoriteContext.Provider>
    </div>
  );
}
export default App;
