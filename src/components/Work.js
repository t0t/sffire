import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <figure>
          <img src={this.props.image} />
          <figcaption>
            <span>{this.props.url}</span>
          </figcaption>
        </figure>
      </div>
    );
  }
}
