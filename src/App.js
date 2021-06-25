import React from "react"
import "./style.css"
import SearchMovies from "./SearchMovies"

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <h1 className="title">Movie search app</h1>
        <SearchMovies />
      </div>
    )
  }
}

export default App