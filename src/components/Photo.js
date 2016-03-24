import React, { Component } from 'react';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  handleClick () {
    let active = !this.state.isActive
    this.setState({ isActive: active })
    console.log(this.state.isActive)
  }
  render() {
    let clase = this.state.isActive && 'active'
    return (
      <figure className={clase} onClick={this.handleClick.bind(this)}>
        <img src={this.props.url} />
        <figcaption>
          {this.props.title}
        </figcaption>
      </figure>
    );
  }
}
