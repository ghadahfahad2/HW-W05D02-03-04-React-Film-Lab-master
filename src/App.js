import React, { Component } from 'react';
import './App.css';
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import TMDB from './TMDB'
import Fave from './components/Fave';

class App extends Component  {
  constructor(props){
    super(props)
    this.state={
      films: TMDB.films,
      faves: [],
      current:{}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
   handleFaveToggle=(films)=>{
   const faves=  this.state.faves.slice(0)//copy of faves array
   const filmIndex=this.state.faves.indexOf(films)//to splice that from faves array 
   faves.includes(films) ? faves.splice(filmIndex,1) : faves.push(films)//to check if it in faves array or not
    this.setState({faves})// The above is exactly the same as this.setState({faves: faves})
    console.log(faves)

  }
  
  render() {
    
  return (
    <div className="film-library">
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
    
      <FilmListing allFilm={this.state.films} onFaveToggle={this.handleFaveToggle}  fav={this.state.faves}/>
    </div>
  {/*<FilmListing film={TMDB.films[0]}/>*/}
    {/*pass each films title to FilmListing as props(name=value)*/}

    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
    </div>
  </div>
  );
}
}

export default App;
