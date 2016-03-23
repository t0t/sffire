import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <figure>
          <img src={this.props.image} />
          <figcaption>
            <a href={this.props.url} target="_blank">
              {this.props.url}
            </a>
          </figcaption>
        </figure>
      </div>
    );
  }
}
