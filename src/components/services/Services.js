import React, { Component } from 'react'
import Rebase from 're-base'
import ServicesEntry from './ServicesEntry'
import Skills from '../skills/Skills'
import { IconEmail } from '../Icons'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicios: [],
      template: {}
    };
  }

  componentDidMount() {
    this.ref = base.fetch('servicios', {
      context: this, asArray: true,
      then(data) {
        this.setState({ servicios: data })
      }
    });
    this.tpl = base.fetch('site/header', {
      context: this, asArray: false,
      then(data) {
        this.setState({ template: data })
      }
    });
  }

  render() {
    let header = this.state.template.servicios;
    var servicios = this.state.servicios.map( function(data) {
        return <ServicesEntry {...data} />
    })

    return (
      <section className="Site__section Site__section--services">
        <div className="Site__section__header">
          <h1>{header}</h1>
        </div>
        {servicios}
        <Skills />
      </section>
    )
  }
}
