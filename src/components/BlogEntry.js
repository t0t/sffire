import React, { Component } from 'react';

export default class BlogEntry extends Component {
  render() {
    return (
      <div>
        <img src='http://thecatapi.com/api/images/get?format=src&type=jpg' />
        <h2>{this.props.name}</h2>
        <h2><i>{this.props.title}</i></h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
