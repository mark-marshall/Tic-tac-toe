import React from 'react';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      initial: 0,
    }
  }

  render() {
    return (
      <div className="container">Hello World</div>
    );
  }
}

export default Container;
