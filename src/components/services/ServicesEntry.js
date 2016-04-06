import React, { Component } from 'react';

export default class ServicesEntry extends Component {
  render() {
    return (
      <li>
        {(this.props.header) ? <h4>{this.props.header}</h4> : null}
        {(this.props.p1) ? <p>{this.props.p1}</p> : null}
        {(this.props.p2) ? <p>{this.props.p2}</p> : null}
      </li>
    );
  }
}
