import React, { Component } from 'react';
import { IconLogoSF, IconCC } from './Icons';
import Social from './social/Social'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Site__footer">
        <Social/>
        <small><IconLogoSF /> Handcoded with love by Sergio Forés <IconCC/></small>
      </footer>
    )
  }
}
