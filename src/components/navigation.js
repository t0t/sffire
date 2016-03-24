import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MainNav extends Component {
  render () {
    return (
      <ul className="Nav-main">
        <li className="Nav-main__item">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/works">
            Works
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/page">
            Pages
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/skills">
            Skills
          </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/photos">
            Photos
          </Link>
        </li>
      </ul>
    )
  }
}
