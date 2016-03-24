import React, { Component } from 'react'
import {IconArrowRight} from './Icons'

export default class SocialLinks extends Component {
  render() {
    return (
      <li className="Social__item">
        <a href={this.props.url}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
