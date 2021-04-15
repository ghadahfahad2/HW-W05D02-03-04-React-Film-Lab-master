import React, { Component } from 'react'

export default class FilmDetails extends Component {
   
    render() {
        const films=this.props.film
        return (
            <div>
                <h1>{films.title}</h1>
            </div>
        )
    }
}
