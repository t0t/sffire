import React, { Component } from 'react'
import Photo from './Photo'
import Rebase from 're-base'
import Slider from './Slider'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

console.log(base);

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      loading: true
    };
    // this.url = base.photos;
  }

  componentDidMount(){
    this.photosRef = base.bindToState('photos', {
      context: this,
      state: 'slides',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.photosRef);
  }

  render() {
    var slides = this.state.slides.map(function(data){
      return <Photo {...data} />
    })

    return (
      <section>
        {slides}
      </section>
    );
  }
}
