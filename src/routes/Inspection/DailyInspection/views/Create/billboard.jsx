import React, { Component, } from 'react';
import './index.styl';

class Billboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentDidMount() { }

  render() {
    return (
      <div className="billboard-style">
        <div class="billboard-circle"></div>
        <div class="billboard-triangle"></div>
        <div class="billboard-square"></div>
      </div>

    );
  }
}
export default Billboard
