import React from 'react';
import Squares from './Squares';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: [
        { gridPos: 1, fill: '' },
        { gridPos: 2, fill: '' },
        { gridPos: 3, fill: '' },
        { gridPos: 4, fill: '' },
        { gridPos: 5, fill: '' },
        { gridPos: 6, fill: '' },
        { gridPos: 7, fill: '' },
        { gridPos: 8, fill: '' },
        { gridPos: 9, fill: '' }
      ],
    };
  }

  userSelection = props => {
    if (status) {
      this.setState(prevState => ({
        squares: prevState.squares.map(square => {
          square.fill = '';
          return square;
        })
      }));
      status = '';
    } else {
      this.setState(prevState => ({
        squares: prevState.squares.map(square => {
          if (square.gridPos === props && !square.fill) {
            square.fill = '☺️';
            return square;
          } else {
            return square;
          }
        })
      }));
      console.log(this.checkWinner());
      this.computerSelection(props);
    }
  };

  compFillSquare = props => {
    this.setState(prevState => ({
      squares: prevState.squares.map(square => {
        if (square.gridPos === props) {
          square.fill = '🤖';
          return square;
        } else {
          return square;
        }
      })
    }));
  };

  computerSelection = props => {
    const emptySpaces = this.state.squares.filter(square => {
      if (!square.fill && square.gridPos !== props) {
        return square;
      }
    });
    const numberForSelection = emptySpaces.map(square => square.gridPos);
    const compSelection =
      numberForSelection[Math.floor(Math.random() * numberForSelection.length)];
    this.compFillSquare(compSelection);
  };

  checkWinner = () => {
    const gameArr = this.state.squares.map(square => square.fill);
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (gameArr[a] && gameArr[a] === gameArr[b] && gameArr[b] === gameArr[c]) {
        return gameArr[a];
      }
    }
    return null;
  };

  render() {
    const winner = this.checkWinner();
    if (winner === '☺️') {
      status = 'You carried humanity to victory 🤟';
    } else {
    if (winner === '🤖') 
      {status = 'The robots have won 😱';}
    }
    const arrCheck = this.state.squares.map(square => square.fill);
    if (!arrCheck.includes("") && !winner) {
      status = 'The robots signed a peace treaty ✌️'
    }

    return (
      <div>
        <h1>One chance to save humanity</h1>
        <div className="container">
          <Squares
            className="square"
            squareObj={this.state.squares}
            fillSquare={this.userSelection}
          />
        </div>
        <h2>{status}</h2>
      </div>
    );
  }
}

export default Container;
