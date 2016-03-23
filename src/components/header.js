import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom';

export default class Header extends Component {
  constructor() {
    super();
    this.state = { open: false }
  }

  handleClick() {
    this.setState({open: !this.state.open});
  }


  render() {
    return (
      <header>
        <div className='header-rose'></div>
        <nav onClick={this.handleClick.bind(this)} className='nav-menu'>
          <ul className={"nav-menu-container " + (this.state.open ? "show" : "") }>
            <li className="nesting-nav-wrapper">Our Wedding
              <ul className="sub-nav">
                <li><Link to="/">Save the Date</Link></li>
                <li><Link to="/ourstory">Our Story</Link></li>
                <li><Link to="/ourweddingparty">Wedding Party</Link></li>
              </ul>
            </li>
            <li><Link to="/rsvp">RSVP</Link></li>
            <li className="nesting-nav-wrapper">Details
              <ul className="sub-nav">
                <li><Link to="/details">Details</Link></li>
                <li><Link to="/accomodations">Accomodations</Link></li>
              </ul>
            </li>
            <li><Link to="/registry">Registry</Link></li>
            <li><Link to="/photos">Photos</Link></li>
          </ul>
        </nav>
      </header>
      )
    }
}
