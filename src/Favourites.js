import React from "react";
import { connect } from "react-redux";
import { addToFav } from "./services/Actions/action";

const Favourites = (props) => {
  const fav = props.data.favMovieSection.favData;
  console.log("FAVV", fav);

  return (
    <div>
      <h1 style= {{color:'red', fontStyle: 'oblique', fontFamily: 'fantasy'}}> <center> FAV SECTION </center> </h1>
      <h1>{fav.release_date}</h1>

      <div id="show">
        {fav.map((d, i) => {
          return (
            <ul>
              <li key={i} id="clr">
                <img
                  src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                  alt="poster"
                />

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
};
const mapStateToProps = (state) => ({
  data: state,
 // favMovieSection
});
export default connect(mapStateToProps, null)(Favourites);  //CONNECT use to connect our redux store with compo
