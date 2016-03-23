import "./scss/main.scss"

import React, {Component} from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'

// import Wrapper from './components/wrapper'
import About from './components/About'
import Page from './components/Page'
import Works from './components/Works'
import Blog from './components/Blog'
import Photos from './components/Photos'
import Skills from './components/Skills'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <main className="Site">
        <Header/>
        <ul className="Nav-main">
          <li className="Nav-main__item"><Link to="/about">About</Link></li>
          <li className="Nav-main__item"><Link to="/works">Works</Link></li>
          <li className="Nav-main__item"><Link to="/page">Pages</Link></li>
          <li className="Nav-main__item"><Link to="/blog">Blog</Link></li>
          <li className="Nav-main__item"><Link to="/skills">Skills</Link></li>
          <li className="Nav-main__item"><Link to="/photos">Photos</Link></li>
        </ul>
        {this.props.children}
        <Footer/>
      </main>
    )
  }
}
// <Router history={browserHistory}>
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="works" component={Works} />
      <Route path="page" component={Page} />
      <Route path="blog" component={Blog} />
      <Route path="skills" component={Skills} />
      <Route path="photos" component={Photos} />
    </Route>
  </Router>
), document.getElementById('root'))
