import React, { Component } from 'react';
import { IconLogo, IconCC } from './Icons';
import Social from './social/Social'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Site__footer">
        <small><IconLogo/> Handcoded with love by Sergio Forés <IconCC/></small>
        <Social/>
      </footer>
    )
  }
}
