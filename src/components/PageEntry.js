import React, { Component } from 'react';

export default class BlogEntry extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h4>{this.props.title}</h4>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
