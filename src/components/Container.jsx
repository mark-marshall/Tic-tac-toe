import React from 'react';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      SquareOne: '',
      SquareTwo: '',
      SquareThree: '',
      SquareFour: '',
      SquareFive: '',
      SquareSix: '',
      SquareSeven: '',
      SquareEight: '',
      SquareNine: '',
    };
  }

  userFillSquare = (square) => {
    this.setState({
      [square]: 'O',
    })
  }
  

  render() {
    return (
      <div className="container">
        <button onClick={() => this.userFillSquare('SquareOne')} className="square" data-tab={1}>{this.state.SquareOne}</button>
        <button onClick={() => this.userFillSquare('SquareTwo')} className="square" data-tab={2}>{this.state.SquareTwo}</button>
        <button onClick={() => this.userFillSquare('SquareThree')} className="square" data-tab={3}>{this.state.SquareThree}</button>
        <button onClick={() => this.userFillSquare('SquareFour')} className="square" data-tab={4}>{this.state.SquareFour}</button>
        <button onClick={() => this.userFillSquare('SquareFive')} className="square" data-tab={5}>{this.state.SquareFive}</button>
        <button onClick={() => this.userFillSquare('SquareSix')} className="square" data-tab={6}>{this.state.SquareSix}</button>
        <button onClick={() => this.userFillSquare('SquareSeven')} className="square" data-tab={7}>{this.state.SquareSeven}</button>
        <button onClick={() => this.userFillSquare('SquareEight')} className="square" data-tab={8}>{this.state.SquareEight}</button>
        <button onClick={() => this.userFillSquare('SquareNine')} className="square" data-tab={9}>{this.state.SquareNine}</button>
      </div>
    );
  }
}

export default Container;
