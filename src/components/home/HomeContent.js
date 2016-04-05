import React, { Component } from 'react';

export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <h1 className="Home__header">{this.props.p}</h1>
        <img src={this.props.img} />
      </div>
    );
  }
}
