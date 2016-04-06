import React, { Component } from 'react';

export default class BlogEntry extends Component {
  render() {
    return (
      <article className="Site__section__article">
        {(this.props.name) ? <h2 className="Article-header">{this.props.name}</h2> : null}
        {(this.props.img1) ? <img src={this.props.img1}/> : null}
        {(this.props.title) ? <h4>{this.props.title}</h4> : null}
        {(this.props.desc) ? <small>{this.props.desc}</small> : null}
        {(this.props.p1) ? <p>{this.props.p1}</p> : null}
        {(this.props.p2) ? <p>{this.props.p2}</p> : null}
        {(this.props.blockquote) ? <blockquote>{this.props.blockquote}</blockquote> : null}
      </article>
    );
  }
}
