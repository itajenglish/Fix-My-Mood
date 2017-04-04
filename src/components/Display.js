import { Component } from 'react';

class Display extends Component {

  componentWillMount(){
    switch(this.props.match.params.mood){
      case 'happy': {
      console.log('Happy Day');
      break;
    }
      case 'sad': {
        console.log('oh sad day!');
        break;
      }
      case 'angry': {
        console.log('Ohh fuck!');
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
