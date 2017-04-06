import React, { Component } from 'react';
import API from '../utils/api';
import Spinner from 'react-spinjs';
class Display extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      isLoading: true
    }
  }

  componentWillMount(){
    //Render Current Songs By Params In URL Route.
    switch(this.props.match.params.mood) {
      case 'happy': {
        API.happySongs()
        .then(response => {
          console.log(response)
          this.setState({isLoading: false });
        })
      break;
    }
      case 'sad': {
        API.sadSongs()
        .then(response => {
          console.log(response)
          this.setState({isLoading: false });
        })
        break;
      }
      case 'angry': {
        API.angrySongs()
        .then(response => {
          console.log(response)
          this.setState({isLoading: false });
        })
        break;
      }
      default:
      return null;
    }
  }
  
  renderSongs(){
    return (
      <h1>Songs</h1>
    )
  }
  
  render() {
    return(
      <div>
        {this.state.isLoading ? <Spinner /> : this.renderSongs()}    
      </div>
    )
  }

}

export default Display;
