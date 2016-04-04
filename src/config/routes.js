import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'
import { IndexRoute } from 'react-router'

import App from '../components/App'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Works from '../components/work/Works'
import Blog from '../components/blog/Blog'
import Slider from '../components/slider/Slider'
import Skills from '../components/skills/Skills'

// <Router history={browserHistory}>
export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="works" component={Works} />
    <Route path="blog" component={Blog} />
    <Route path="photos" component={Slider} />
    <IndexRoute component={Home} />
  </Route>
)
