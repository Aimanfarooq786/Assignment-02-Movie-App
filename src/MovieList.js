import React, { Component } from 'react'
import './App.css'
export class MovieList extends Component {
    render() {
        return (
            <div id="show">
                {
                    this.props.data.map((d, i) => {
                        return (
                            <ul >
                                <li key={i} id="clr">
                                    <img src={d.Poster} alt="poster" />
                                    <h3> Title: {d.Title}</h3>
                                    <p> <b>Year:</b> {d.Year}</p>
                                    <p> <b>Id:</b> {d.imdbID}</p>
                                    <p> <b>Type:</b> {d.Type}</p>
                                </li>
                            </ul>
                        )
                    })
                }

            </div>

        )

    }
}

export default MovieList
