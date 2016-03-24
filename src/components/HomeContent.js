import React, { Component } from 'react';

export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.p}</p>
        <img src={this.props.img} />
      </div>
    );
  }
}
