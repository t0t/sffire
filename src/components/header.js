import React, { Component } from 'react';
import Rebase from 're-base';
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');
// import { browserHistory, Router, Route, Link } from 'react-router'

import IconUmbrella from './Icons';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: {}
    };
  }

  getPage() {
    base.fetch('brand', {
      context: this,
      asArray: false,
      then(data) { this.state.brand = data; }
    });
  }

  componentDidMount(){
    this.blogRef = base.bindToState('brand', {
      context: this,
      state: 'brand',
      asArray: false
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.blogRef);
  }

  render() {
    this.getPage();
    return (
      <header className="Site__header">
        <h1>{this.state.brand.name}</h1>
        <h2>{this.state.brand.title}</h2>
        <IconUmbrella />
      </header>
    )
  }
}
