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

  
  userSelection = props => {
     this.setState(prevState => ({
      squares: prevState.squares.map(square => {
        if (square.gridPos === props) {
          square.fill = 'o';
          return square;
        } else {
          return square;
        }})}))
        this.computerSelection(props);
      }

    compFillSquare = props => {
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

  computerSelection = props => {
   const emptySpaces = this.state.squares.filter(square => {
     if (!square.fill && square.gridPos !== props) {
       return square
     }})
    const numberForSelection = emptySpaces.map(square => square.gridPos);
    const compSelection = numberForSelection[Math.floor(Math.random() * numberForSelection.length)];
    this.compFillSquare (compSelection);
  }


  
  render() {
    //we will check for the winners here and invoke a function to clear the board/send a message 
    return (
      <div className="container">
       <Squares className="square" squareObj={this.state.squares} fillSquare={this.userSelection}/>
      </div>
    );
  }
}

export default Container;


/* 

const winningCombos =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]
]
*/