import React, { Component } from "react";
import { withRouter,  Link } from "react-router-dom";
export class MovieDescription extends Component {
  render() {
    const descData = [
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        Title: "Star Wars: Episode IV - A New Hope",
        writer: "John Barkey Aks",
        production: 'Bron Studios',
        id: "0",
        Description: `The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots, or ' droids `,
        Date: "20-09-2012"
      },
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        Title: "The Empire Strikes Back",
        writer: "Yorey Walken Rpil",
        production: 'Warner Broes',
        id: "1",
        Description: `The Empire Strikes Back is the best of three Star Wars films, and the most thought-provoking. After the space opera cheerfulness of the original film, this one plunges into darkness and even despair, and surrenders more completely to the underlying mystery of the story. It is because of the emotions stirred in Empire that the entire series takes on a mythic quality that resonates back to the first and ahead to the third. This is the heart.`,
        Date: "13-07-1998"
      },
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        Title: "Star Wars: Episode VI - Return of the Jedi",
        writer: "Rakish Gua Taves",
        production: 'DC Films',
        id: "2",
        Description: `The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots, or ' droids `,
        Date: "05-09-2005"
      },
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        Title: "Star Wars: Episode IV - A New Hope",
        writer: "John Barkey Aks",
        production: 'Nara Cone',
        id: "3",
        Description: `The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots, or ' droids `,
        Date: "15-09-1884" 
      },
    ];

    const id = this.props.match.params;
    console.log(id);
    const data = descData.find((data) => data.id === id.movieId);
    return (

      <div id="description">
        <h1 id="home"> {data.Title}   </h1> <br/><br/>
        <img src={data.Poster} alt="poster" />
        <p><b class="bold" >Overview</b> <br/><br/> {data.Description}  </p> <br/><br/>
        <p> <b class="bold">Writer: </b>   {data.writer}</p>  <br/><br/>
        <p> <b class="bold">Production: </b>   {data.production}</p>  <br/><br/>
        <p> <b class="bold">Release Date: </b>   {data.Date}</p> <br/><br/><br/><br/><br/>
       
        <div id="btn">
        <Link  to= "/movies/:movieId/reviews"> Show Reviews </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDescription);
