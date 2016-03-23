import React, { Component } from 'react';
import Skill from './Skill';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      pags: [],
      data: {}
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('skills/tools', {
      context: this,
      state: 'tools',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  getData(){
    base.fetch('skills', {
      context: this,
      asArray: false,
      then(data){ this.state.data = data; }
    });
  }

  render() {
    this.getData();
    // var skill = this.state.tools.map(function(skill){
    //   return <Skill {...skill} />
    // })
    return (
      <section>
        <h1>{this.state.data.title}</h1>
        <p>{this.state.data.dev}</p>
        <p>{this.state.data.experiencia}</p>
      </section>
    )
  }
}
