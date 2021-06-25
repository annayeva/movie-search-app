import React, {useState} from "react"
import MovieCard from "./MovieCard"
import "./style.css"

export default function SearchMovies (){
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("submiting")
        const url = `https://api.themoviedb.org/3/search/movie?api_key=cf554a05ab1259620a51e098b72c8864&language=en-US&query=${query}&page=1&include_adult=false`;
       
        try{
            const response = await fetch(url)
            const movieData = await response.json()
            setMovies(movieData.results);
        }  catch(err){
            console.error(err);
        }
    }

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie name:</label>
                <input className="input" type="text" name="query" placeholder="type the movie name" value={query} onChange={(e)=> setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}