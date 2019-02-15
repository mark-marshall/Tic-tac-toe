import React from 'react';
import Squares from './Squares';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
    squares: [
      {gridPos: 1, fill: ''},
      {gridPos: 2, fill: ''},
      {gridPos: 3, fill: ''},
      {gridPos: 4, fill: ''},
      {gridPos: 5, fill: ''},
      {gridPos: 6, fill: ''},
      {gridPos: 7, fill: ''},
      {gridPos: 8, fill: ''},
      {gridPos: 9, fill: ''},
    ]
    };
  }

  
  userFillSquare = (sq) => {
     console.log(sq)
    this.computerAssess();
  }
  
  computerAssess = () => {
   console.log('eyyy')
  }
  

  render() {
    return (
      <div className="container">
       <Squares className="square" squareObj={this.state.squares} fillSquare={this.userFillSquare}/>
      </div>
    );
  }
}

export default Container;


