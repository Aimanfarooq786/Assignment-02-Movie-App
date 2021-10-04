import React, { Component } from 'react'
import './App.css'
//import data from './Data';

export class MovieList extends Component {
    render() {

        return (

<>
            <div id="show">
                
                  
                   {
                    this.props.data.map((d, i) => {
                    return (
                        <ul >
                        <li key={i} id="clr">
                            <img src={d.Poster}/>
                            <h3>{d.Title}</h3>
                            <p>{d.Year}</p>
                            <p>{d.imdbID}</p>
                            <p>{d.Type}</p>
                        </li>
                        </ul>
                    )
                })
                }

                {/* {
                    data.map(d => {
                        // console.log(d);
                        return (
                            <ul>
                                 <li> {this.props.d}  </li>
                                <img src={this.props.d.poster} alt='cover' />
                                <h4>{this.props.d.title}</h4>
                                <p> {this.props.d.year} </p>
                                <p> {this.props.d.id} </p>
                                <p> {this.props.d.type} </p>
                            </ul>
                        )
                    })



                } */}
            </div>

        </>)



    }
}

export default MovieList
