import React, { Component } from 'react';

export default class AboutEntry extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.email}</h2>
        <h2><i>{this.props.title}</i></h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
