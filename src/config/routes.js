import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'
import { IndexRoute } from 'react-router'

import App from '../components/App'
import Home from '../components/Home'
import About from '../components/About'
import Page from '../components/Page'
import Works from '../components/Works'
import Blog from '../components/Blog'
import Photos from '../components/Photos'
import Skills from '../components/Skills'
// <Router history={browserHistory}>
export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="page" component={Page} />
    <Route path="works" component={Works} />
    <Route path="blog" component={Blog} />
    <Route path="photos" component={Photos} />
    <Route path="skills" component={Skills} />
    <IndexRoute component={Home} />
  </Route>
)
