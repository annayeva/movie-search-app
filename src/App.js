import React, {useState} from "react"
import "./style.css"
import SearchMovies from "./SearchMovies"
import Favourites from "./Favourites"

export default function App () {
    const [searchWindow, searchVisibility] = useState(true);
    const [faveMovies, changeFavourites] = useState([])

  function addToFaves(clickedMovie){
    console.log("FAVE ADD: " + clickedMovie.id);
    const movieToAdd = {
      poster_path: clickedMovie.poster_path,
      id: clickedMovie.id,
      title: clickedMovie.title,
      release_date: clickedMovie.release_date,
      vote_average: clickedMovie.vote_average,
      overview: clickedMovie.overview
    }
    changeFavourites(faveMovies.concat(movieToAdd))
  }

  function removeFromFaves(movieToRemove){
    console.log("FAVE REMOVE " + movieToRemove.id);
    const updatedFaves = faveMovies.filter(faveMovie => faveMovie.id != movieToRemove.id)
    changeFavourites(updatedFaves)
  }

    return(
      <div className="container">
        <h1 className="title">Movie search app</h1>
        <div className="menu">
          <button className={searchWindow ? "selectedBtn" : "deselectedBtn"} onClick={()=>searchVisibility(true)}>SEARCH</button>
          <button className={searchWindow ? "deselectedBtn" : "selectedBtn"} onClick={()=>searchVisibility(false)}>FAVOURITES</button>
        </div>
        {searchWindow ? 
        <SearchMovies faveMovies={faveMovies} addToFaves={addToFaves} removeFromFaves={removeFromFaves} /> 
        : <Favourites addToFaves={addToFaves} removeFromFaves={removeFromFaves} faveMovies={faveMovies} />}
      </div>
    )
}
