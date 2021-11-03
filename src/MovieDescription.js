import axios from "axios";
import React, { Component } from "react";
import { withRouter,  Link } from "react-router-dom";
import { PIC_URL } from "./Url";

export class MovieDescription extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       descData:[]
    }
  }
  componentDidMount(){
    const moviesId = this.props.match.params.movieId;
    axios.get(`${process.env.REACT_APP_MOVIE_BASE_URL}${moviesId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(details =>{
      console.log(details.data);
      this.setState({descData: details.data})
    })
    .catch(error =>{
      console.log('ERROR FOUND');
    })
  }
  render() {
    const {descData}= this.state;
    return (

      <div id="description">

                <h1 id="home"> {descData.title}   </h1> <br/><br/>
                <img src= {`${PIC_URL}${descData.poster_path}`} alt="poster" />
                <p><b class="bold" >Overview</b> <br/><br/> {descData.overview}  </p> <br/><br/>
                <p> <b class="bold">Release Date: </b>   {descData.release_date}</p> <br/><br/>
                <p> <b class="bold">Popularity: </b>   {descData.popularity}</p> <br/><br/>
       
                <div id="btn">
                <Link  to= {`/movies/${descData.id}/reviews`}> <b> Show Reviews </b> </Link>
                </div>
      </div>
    );
  }
}

export default withRouter(MovieDescription);
