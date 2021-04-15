import React, { Component } from 'react'
export default class Fave extends Component {
   // what should happen when the component is first created
   constructor (props) {
    // make call to parent class' (Component) constructor
    super(props)
    this.state = {
        //isFave: false // initialize this.state.isFave to be false
      };
  }
  
handleClick(e) {
    e.stopPropagation()
    console.log('Handling Fave click!')
  
    // Add this line. You'll call the function passed through props
    this.props.onFaveToggle()
  
    // Delete the `setState` line. You no longer track state here
    // this.setState({isFave: !this.state.isFave})
  } 
    render() {
       let isFve = (this.props.fav) ? 'remove_from_queue' : 'add_to_queue'
        return (
         <div>
                <div className="film-row-fave add_to_queue" onClick={(e)=>{
                this.handleClick(e)
                }}>
            <p className="material-icons" >{isFve}</p>
            
            </div>
           </div>
        )
    }
}
