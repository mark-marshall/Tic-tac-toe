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

  
  userFillSquare = props => {
     this.setState(prevState => ({
      squares: prevState.squares.map(square => {
        if (square.gridPos === props) {
          square.fill = 'o';
          return square;
        } else {
          return square;
        }})}))
        this.computerAssess(props);
      }

    compFillSquare = props => {
      console.log(props);
      this.setState(prevState => ({
        squares: prevState.squares.map(square => {
          if (square.gridPos === props) {
            square.fill = 'x';
            return square;
          }
          else {
            return square;
          }
        })
      }))
    }

  computerAssess = props => {
   const emptySpaces = this.state.squares.filter(square => {
     if (!square.fill && square.gridPos !== props) {
       return square
     }})
    const numberForSelection = emptySpaces.map(square => square.gridPos);
    const compSelection = numberForSelection[Math.floor(Math.random() * numberForSelection.length)];
    this.compFillSquare (compSelection);
  }


  /*
   // console.log(emptyGrids);
   let numbersAvail = emptyGrids.map(square => square.gridPos);
   // console.log(numbersAvail);
   let postionOfCurrent = numbersAvail.indexOf(props);
   // console.log(postionOfCurrent);
   numbersAvail.splice(postionOfCurrent, 1)
   console.log(numbersAvail);
  */
  
  

  render() {
    return (
      <div className="container">
       <Squares className="square" squareObj={this.state.squares} fillSquare={this.userFillSquare}/>
      </div>
    );
  }
}

export default Container;


