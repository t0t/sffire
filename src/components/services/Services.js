import React, { Component } from 'react'
import Rebase from 're-base'

import ServicesEntry from './ServicesEntry'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }

  componentDidMount() {
    this.blogRef = base.bindToState('pages', {
      context: this,
      state: 'pages',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.blogRef);
  }

  render() {
    console.log(this.state.pages);
    var pages = this.state.pages.map( function(data) {
        return <ServicesEntry {...data} />
    })

    return (
      <section>
        {pages}
      </section>
    )
  }
}
