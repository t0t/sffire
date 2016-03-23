import React, { Component } from 'react';
import Photo from './Photo';
import Rebase from 're-base';
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');
console.log(base);
export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
    // this.url = base.photos;
  }

  componentDidMount(){
    this.photosRef = base.bindToState('photos', {
      context: this,
      state: 'photos',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.photosRef);
  }

  render() {
    var photosArray = this.state.photos.map(function(data){
      return <Photo {...data} />
    })
    console.log(photosArray);
    return (
      <section>
        <h2>Photo Gallery</h2>
        {photosArray}
      </section>
    );
  }
}
