import React, { Component } from 'react';
import BlogEntry from './BlogEntry';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  componentDidMount(){
    this.blogRef = base.bindToState('blog', {
      context: this,
      state: 'blogPosts',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.blogRef);
  }

  render() {
    console.log(this.state.blogPosts);
    var blogPosts = this.state.blogPosts.map(function(data){
        return <BlogEntry {...data} />
    })

    return (
      <div>
        <h1>BLOG</h1>
        {blogPosts}
      </div>
    )
  }
}
