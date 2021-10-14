//import data from "./Data";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { MovieList } from "./MovieList";
import MovieDescription from "./MovieDescription";
import ReviewsData from "./ReviewsData";

function App() {
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}
export default App;
