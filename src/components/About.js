import React, { Component } from 'react';
import AboutEntry from './AboutEntry';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pags: [],
      page: {}
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('about', {
      context: this,
      state: 'pags',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  getAboutPage(){
    base.fetch('about', {
      context: this,
      asArray: false,
      then(data){ this.state.page = data; }
    });
  }

  render() {
    this.getAboutPage();
    return (
      <div>
        <h1>{this.state.page.title}</h1>
        <p>{this.state.page.desc}</p>
        <a href="{this.state.page.email}">{this.state.page.email}</a>
      </div>
    )
  }
}
