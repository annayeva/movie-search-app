import React from "react"
import "./style.css"
import "./MovieCardStyle.css"

export default function MovieCard (props){
    return(
        <div className="card" id={props.movie.id}>
            <img className="card--image" 
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
            alt={props.movie.title + " poster"} />
            <div className="card--content">
                <h2 className="movieTitle">{props.movie.title}</h2>
                <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
                <p><small>RATING: {props.movie.vote_average}</small></p>
                <p className="card--desc">{props.movie.overview}</p>
            </div>
        </div>
    )
}