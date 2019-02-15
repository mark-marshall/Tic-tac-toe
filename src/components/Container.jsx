import React from 'react';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      initial: 0
    };
  }

  render() {
    return (
      <div className="container">
        <div className="square" data-tab={1}>1</div>
        <div className="square" data-tab={2}>2</div>
        <div className="square" data-tab={3}>3</div>
        <div className="square" data-tab={4}>4</div>
        <div className="square" data-tab={5}>5</div>
        <div className="square" data-tab={6}>6</div>
        <div className="square" data-tab={7}>7</div>
        <div className="square" data-tab={8}>8</div>
        <div className="square" data-tab={9}>9</div>
      </div>
    );
  }
}

export default Container;
