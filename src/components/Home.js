import React, { Component } from 'react';
import HomeContent from './HomeContent';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: []
    };
  }

  componentDidMount(){
    this.blogRef = base.bindToState('home', {
      context: this,
      state: 'home',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.blogRef);
  }

  render() {
    console.log(this.state.home);
    var home = this.state.home.map(function(data){
        return <HomeContent {...data} />
    })

    return (
      <section>
        {home}
      </section>
    )
  }
}
