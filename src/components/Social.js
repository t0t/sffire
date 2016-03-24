import React, { Component } from 'react'
import Rebase from 're-base'
import SocialLinks from './SocialLinks'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('social', {
      context: this,
      state: 'data',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  // getData(){
  //   base.fetch('social', {
  //     context: this,
  //     asArray: false,
  //     then(data){ this.state.data = data; }
  //   });
  // }

  render() {
    // this.getData();

    console.log(this.props);
    console.log(this.state.data);

    var socialLinks = this.state.data.map(function(data){
      return <SocialLinks {...data} />
    });
    return (
      <ul className="Social">
        {socialLinks}
      </ul>
    )
  }
}
