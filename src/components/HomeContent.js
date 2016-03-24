import React, { Component } from 'react';

export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <img src='http://thecatapi.com/api/images/get?format=src&type=jpg' />
        <p>
        {this.props.title} {this.props.p}
        {this.props.p}
        </p>
        <img src={this.props.img} />
      </div>
    );
  }
}
