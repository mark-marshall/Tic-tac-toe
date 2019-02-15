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

  render() {
    return (
      <div className="container">
        <div className="square" data-tab={1}>{this.state.SquareOne}</div>
        <div className="square" data-tab={2}>{this.state.SquareTwo}</div>
        <div className="square" data-tab={3}>{this.state.SquareThree}</div>
        <div className="square" data-tab={4}>{this.state.SquareFour}</div>
        <div className="square" data-tab={5}>{this.state.SquareFive}</div>
        <div className="square" data-tab={6}>{this.state.SquareSix}</div>
        <div className="square" data-tab={7}>{this.state.SquareSeven}</div>
        <div className="square" data-tab={8}>{this.state.SquareEight}</div>
        <div className="square" data-tab={9}>{this.state.SquareNine}</div>
      </div>
    );
  }
}

export default Container;
