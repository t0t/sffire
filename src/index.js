import "./scss/main.scss"

import React from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'
import routes from './config/routes'

// <Router history={browserHistory}>
render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
)
