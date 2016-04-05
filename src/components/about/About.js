import React, { Component } from 'react';
import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');
import { IconEmail } from '../Icons'

import Skills from '../skills/Skills'
import Services from '../services/Services'


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
      <section>
        <h1>{this.state.page.desc}</h1>
        <a href="{this.state.page.email}"><IconEmail/> {this.state.page.email}</a>
        <Services />
        <Skills />
      </section>
    )
  }
}
