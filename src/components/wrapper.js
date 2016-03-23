import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
