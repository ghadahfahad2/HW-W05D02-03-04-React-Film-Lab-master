import React, { Component } from 'react'
import Fave from './Fave';

export default class FilmRow extends Component {
    handleDetailsClick =(film)=>{
        console.log('Fetching details for',film)
        }
    render() {
        let ImgLink=`https://image.tmdb.org/t/p/w780/${this.props.filmRow.poster_path}`
        let filmDate = new Date(this.props.filmRow.release_date);
        let year = filmDate.getFullYear();
     
        return (
            <div>
                <div className="film-row" onClick={(e)=>{
                this.handleDetailsClick(this.props.filmRow.title)
                }}>
               <img src={ImgLink} alt="" />

                <div className="film-summary">
                    <h1> {this.props.filmRow.title}  </h1>
                    <p>{year}</p>
                    <Fave fav={this.props.isfave}  onFaveToggle={(e)=>{
                this.props.onFaveToggle()
                }}/>

                </div>
</div>
            </div>
        )
    }
}
