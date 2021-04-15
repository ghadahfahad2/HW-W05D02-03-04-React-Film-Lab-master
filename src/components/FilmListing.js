import React, { Component } from 'react'
import FilmRow from './FilmRow'
export default class FilmListing extends Component {
    constructor(props) { // props is { body: "This is my first blog post" }
    super();
    this.state = {
        filter : 'ALL' ,// This will set up the initial state of the component.
        isFave: false 
    }

    }

    handleFilterClick  = (fave) => { 
        console.log("Setting filter to",fave) 
        this.setState({
            filter: fave,
            isFave: !this.state.isFave
        })}; 

    render(){
        {/*const films=this.props.film*/}
       let allFms = this.props.allFilm.map((value)=> {
            return <FilmRow filmRow={value }  isfave={this.state.isFave} filmId={value.id}  onFaveToggle={() => this.props.onFaveToggle(value)}
            />
          });

          let FaveFms = this.props.fav.map((value)=> {
            return <FilmRow filmRow={value }  isfave={this.state.isFave} filmId={value.id}  onFaveToggle={() => this.props.onFaveToggle(value)}
            />
          });
          const allactive = this.state.filter === 'all' ? ' is-active' : ''
          const faveactive = this.state.filter === 'faves' ? ' is-active' : ''

        {/*itreate array that in props*/}
        // console.log("THE lenght Of all Film",allFms.length)
       // console.log("THE lenght Of Faves Film",FaveFms.length)

        return (
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              <div onClick={(e)=>{this.handleFilterClick('all')}} className={"film-list-filter" + allactive}>
                ALL
                <span className="section-count">{this.props.allFilm.length}</span>
              </div>
              <div onClick={(e)=>{this.handleFilterClick('faves')}} className={"film-list-filter"+faveactive}>
                FAVES
                <span className="section-count">{this.props.fav.length}</span>{/*that with the length of the faves array that is received through the props. */}
              </div>
            </div>
            {(this.state.filter==='faves') ?   FaveFms: allFms}

          </div>
            )
        }
    }

