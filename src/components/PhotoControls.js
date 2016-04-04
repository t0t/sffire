import React, { Component } from 'react';

// Prev and Next buttons
export default class Controls extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Will'
    }
  }
  cambiaNombre() {
    this.setState({
      name: 'Sergio'
    })
  }
  render() {
    return (
      <div className="controls">
        <p onClick={this.cambiaNombre}>
          {this.state.name}
        </p>
      </div>
    )
  }
}
