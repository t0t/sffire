import React, { Component } from 'react';

export default class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  handleClick (e) {
    e.preventDefault
    let active = !this.state.isActive
    this.setState({ isActive: active })
  }
  render() {
    let addClass = this.state.isActive && 'active'
    return (
      <figure>
        <img
          src={ this.props.url }
          onClick={ this.handleClick.bind(this) }
          className={ addClass }
        />
        <figcaption>
          {this.props.title}
        </figcaption>
      </figure>

    )
  }
}
