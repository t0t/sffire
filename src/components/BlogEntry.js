import React, { Component } from 'react';

export default class BlogEntry extends Component {
  render() {
    return (
      <article>
        <img src='http://thecatapi.com/api/images/get?format=src&type=jpg' />
        <h2>{this.props.name}</h2>
        <h4><i>{this.props.title}</i></h4>
        <p>{this.props.desc}</p>
      </article>
    );
  }
}
