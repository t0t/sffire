import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MainNav extends Component {
  render () {
    return (
      <ul className="Nav-main">
        <li className="Nav-main__item">
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/works" activeClassName="active">
            Works
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/page" activeClassName="active">
            Page
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/list" activeClassName="active">
            List
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/photos" activeClassName="active">
            Photos
          </Link>
        </li>
      </ul>
    )
  }
}
