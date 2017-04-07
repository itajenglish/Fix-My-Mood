import React, { Component } from 'react';

class App extends Component {
constructor() {
  super();
  this.state = {
    movies: {
      movieTitle: "insoiw",
      movieRatings: 5
      
    };
  }
}

updateName(e){
  this.setState({movieTitle: e.target.value})
}

render() {
  return (
    <Card>
      <Title name={this.state.movieTitle} updateName={this.updateName.bind(this)}/>
      <Ratings number={this.state.movieRatings}/>
    </Card>
    )
  }
}

export default Header;
///////////////

import React from 'react';

const Title = (props) => {
  
  return(
    <div>
      <input type="text" value={props.name} onChange={props.updateName}/>
    </div>
  )
}