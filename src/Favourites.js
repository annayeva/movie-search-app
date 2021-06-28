import React, {useState} from "react"
import "./style.css"
import MovieCard from "./MovieCard"

export default function Favourites(props){

    return(
        <div className="card-list">{props.faveMovies.map(faveMovie=>(
            <MovieCard faveMovies={props.faveMovies} movie={faveMovie} key={faveMovie.id} addToFaves={props.addToFaves} removeFromFaves={props.removeFromFaves}
        />))}</div>
    )
}


