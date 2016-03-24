import React, { Component } from 'react';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('skills', {
      context: this,
      state: 'data',
      asArray: false
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  // getData(){
  //   base.fetch('skills', {
  //     context: this,
  //     asArray: false,
  //     then(data){ this.state.data = data; }
  //   });
  // }

  render() {
    // this.getData();
    // var skill = this.state.data.map(function(skill){
    //   return <Skill {...skill} />
    // })
    return (
      <ul className="List">
        <li className="List__item">{this.state.data.development}</li>
        <li className="List__item">{this.state.data.webdesign}</li>
        <li className="List__item">{this.state.data.graphicdesign}</li>
        <li className="List__item">{this.state.data.workflow}</li>
        <li className="List__item">{this.state.data.tools}</li>
        <li className="List__item">{this.state.data.environment}</li>
      </ul>
    )
  }
}
