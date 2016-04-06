import React, { Component } from 'react'
import Rebase from 're-base'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: []
    };
  }

  componentDidMount(){
    this.ref = base.fetch('home', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          home: data
        })
      }
    });
  }

  render() {
    console.log(this.state.home)
    let home = this.state.home;

    return (
      <section className="Home">
        <div className="Site__section__header Site__section__header--home">
          <h1>{home.title}</h1>
        </div>
        {(home.img) ? <img src={home.img}/> : null}
        {(home.p1) ? <p>{home.p1}</p> : null}
        {(home.p2) ? <p>{home.p2}</p> : null}
      </section>
    )
  }
}
