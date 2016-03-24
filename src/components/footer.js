import React, { Component } from 'react';
import { IconLogo, IconCC } from './Icons';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Site__footer">
        <small><IconLogo/> Handcoded with love by Sergio Forés</small>
        <IconCC/>
      </footer>
    )
  }
}
