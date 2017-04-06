import { Component } from 'react';
import API from '../utils/api';

class Display extends Component {
  constructor() {
    super();
    this.state = {
      songs: []
    }
  }

  componentWillMount(){
    //Render Current Songs By Params In URL Route.
    switch(this.props.match.params.mood){
      case 'happy': {
        API.happySongs()
        .then(response => {
          console.log(response)
        })
      break;
    }
      case 'sad': {
        API.sadSongs()
        .then(response => {
          console.log(response)
        })
        break;
      }
      case 'angry': {
        API.angrySongs()
        .then(response => {
          console.log(response)
        })
        break;
      }
      default:
      return null;
    }
  }

  render() {
    console.log(this.props)
    return null
  }

}

export default Display;
