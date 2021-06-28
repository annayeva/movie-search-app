import React, {useState} from "react"
import "./style.css"
import "./MovieCardStyle.css"

export default function MovieCard (props){
    const [on, changeOn] = useState(checkIfFave())

    function checkIfFave (){
        const faveMatch = props.faveMovies.find(movie => movie.id == props.movie.id )
        console.log(faveMatch);
        if (faveMatch) {
            return(true)
        }
        else {
            return (false)
        }
    }

    function toggle () {
        if(!on){
            //console.log("added")
            props.addToFaves(props.movie)
        }
        else{
            //console.log("removed")
            props.removeFromFaves(props.movie)
        }
        changeOn(!on)
    }
    return(
        <div className="card" id={props.movie.id}>
            <img className="card--image" 
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
            alt={props.movie.title + " poster"} />
            <div className="card--content">
                <h2 className="movieTitle">{props.movie.title}
                <span className="faveIcon" onClick={toggle}>{on ? "❤️" : "♡"}</span>
                </h2>
                <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
                <p><small>RATING: {props.movie.vote_average}</small></p>
                <p className="card--desc">{props.movie.overview}</p>
                
            </div>
        </div>
    )
}