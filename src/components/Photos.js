import React, { Component } from 'react'
import Photo from './Photo'
import Rebase from 're-base'
import Slider from './Slider'
// import Controls from './PhotoControls'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
    // this.cambiaNombre = this.cambiaNombre.bind(this);
    this.state = {
      slides: [],
      click: 0,
      slide: 0
    };
  }

  componentDidMount(){
    this.ref = base.bindToState('photos', {
      context: this,
      state: 'slides',
      asArray: true
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  slideIndex() {
    this.setState({
      slide: this.state.slide + 1
    })
  }
  cambiaNombre() {
    this.setState({
      click: this.state.click + 1
    })
  }
  render() {
    let slides = this.state.slides.map( (data) => {
      return <Photo {...data} />
    })
    let slide = slides[this.state.slide];
    // console.log( 'slide: ', this.state.slides[this.state.slide]);
    return (
      <section>
        {slide}
        <button
        onClick={this.cambiaNombre.bind(this)}>
        {this.state.click}
        </button>
      </section>
    );
  }
}
