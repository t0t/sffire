import React, { Component } from 'react';
import { IconCC } from './Icons';
import Social from './social/Social'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Site__footer">
        <Social/>
        <small>Handcoded with love by </small>
        <small>Sergio Forés </small>
        <small><IconCC/></small>
      </footer>
    )
  }
}
