import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      <article className="Works__item">
        <h4 className="Works__item__title">{this.props.title}</h4>
        <figure className="Works__figure">
          <img src={this.props.image} />
          <figcaption className="Works__figure__caption">
            {this.props.desc}
          </figcaption>
        </figure>
      </article>
    );
  }
}
