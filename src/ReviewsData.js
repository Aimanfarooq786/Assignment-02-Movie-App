import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
function ReviewsData(props) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const moviesId = props.match.params.movieId;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=a07dba856632c11465f0e933f170c48a&language=en-US&page=1`
      )
      .then((review) => {
        console.log(review.data.results);
        setReviews(review.data.results);
        console.log(reviews);
      })
      .catch((error) => {
        console.log("REVIEWS ERROR");
      });
  }, []);

  return (
    <div>
      <center>
        <table>
          <th>Author</th>
          <th>Reviews</th>
          <th>Ratings</th>

          {reviews.map((rev) => {
            return (
              <tr>
                <td>{[rev.author]}</td>
                <td>{[rev.content]}</td>
                <td>{[rev.author_details.rating]}</td>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
}

export default withRouter(ReviewsData);
