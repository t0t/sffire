import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MainNav extends Component {
  render () {
    return (
      <ul className="Nav-main">
        <li className="Nav-main__item">
          <Link to="/about" activeClassName="active"> Servicios </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/works" activeClassName="active"> Portafolio </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/blog" activeClassName="active"> Blog </Link>
        </li>
        <li className="Nav-main__item">
          <Link to="/photos" activeClassName="active"> Slider </Link>
        </li>
      </ul>
    )
  }
}
