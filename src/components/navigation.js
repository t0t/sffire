import React, { Component } from 'react'
import { Link } from 'react-router'

const ACTIVE = { color: '#999' };

export default class MainNav extends Component {
  render () {
    return (
      <ul className="Nav-main">
        <li className="Nav-main__item">
          <Link to="/about" activeStyle={ACTIVE}>
            About
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/works" activeStyle={ACTIVE}>
            Works
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/page" activeStyle={ACTIVE}>
            Page
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/blog" activeStyle={ACTIVE}>
            Blog
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/list" activeStyle={ACTIVE}>
            List
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/photos" activeStyle={ACTIVE}>
            Photos
          </Link>
        </li>
      </ul>
    )
  }
}
