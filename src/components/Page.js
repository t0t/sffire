import React, { Component } from 'react';
import PageEntry from './PageEntry';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }

  componentDidMount(){
    this.blogRef = base.bindToState('pages', {
      context: this,
      state: 'pages',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.blogRef);
  }

  render() {
    console.log(this.state.pages);
    var pages = this.state.pages.map(function(data){
        return <PageEntry {...data} />
    })

    return (
      <div>
        <h1>PAGE</h1>
        {pages}
      </div>
    )
  }
}
