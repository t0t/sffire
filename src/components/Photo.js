import React, { Component } from 'react';

export default class Photo extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.url} />
        <figcaption>
          {this.props.title}
          <span>{this.props.url}</span>
        </figcaption>
      </figure>
    );
  }
}
