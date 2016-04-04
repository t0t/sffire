import React, {Component} from 'react';
import { Link } from 'react-router'
// import { hashHistory } from 'react-router'
import Header from './header'
import MainNav from './navigation'
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <main className="Site">
        <Header />
        <MainNav />
          {this.props.children}
        <Footer />
      </main>
    )
  }
}
