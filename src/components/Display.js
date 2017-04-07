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
          this.setState({isLoading: false, songs: response.data});
          console.log(this.state);
        })
      break;
    }
      case 'sad': {
        API.sadSongs()
        .then(response => {
          console.log(response)
          this.setState({isLoading: false, songs: response.data});
        })
        break;
      }
      case 'angry': {
        API.angrySongs()
        .then(response => {
          console.log(response)
          this.setState({isLoading: false, songs: response.data});
        })
        break;
      }
      default:
      return null;
    }
  }
  
  renderSongs(){
    return this.state.songs.map((songs, key) => {
      return (
        <div className="card horizontal small" key={key}>
          <div className="card-image">
            <a href={songs.permalink_url} target="_blank">
              <img src={songs.artwork_url} alt={songs.title} />
            </a>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{songs.title}</h3>
              <a href={songs.user.permalink_url} target="_blank">@{songs.user.username}</a>
              <br/>
              <img src={songs.waveform_url} alt={songs.title} style={{height: '80px', backgroundColor: 'orange'}}/>
            </div>
            <div className="card-action">
              <audio controls="controls" src={`${songs.stream_url}?client_id=d6i0wruU7ddayTqrhwszluW0i9aNBlb1`}>
                Your browser does not support the <code>audio</code> element.
              </audio>
      
            </div>
          </div>
        </div>
      )
    })
  }
  
  render() {
    return(
      <div className="container center">
        <div className="row" >
          <div className="col s12">
            {this.state.isLoading ? <Spinner /> : this.renderSongs()}    
          </div>
        </div>
      </div>
    )
  }

}

export default Display;
