import React, { Component } from 'react';
// import { firebaseUrl } from '../../../config';
import Movie from '../Work';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);

export default class WorksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    };
  }

  componentDidMount() {
    baseUrl.syncState('movieList', {
      context: this,
      state: 'works',
      asArray: true
    });
  }

  render() {
    let listOfWorks = this.state.works;
    if (listOfWorks.length) {
      console.log(listOfWorks);
      listOfWorks = listOfWorks.map((work, i) => <Movie key={i} movies={work} />);
    }
    return <ul>{listOfWorks}</ul>
  }
  //
  //render() {
  //  let movie = '';
  //  console.log(this.state);
  //  return(
  //    <ul>
  //      <li onClick={this.handleClick}>{this.state.works}</li>
  //    </ul>
  //  )
  //}
}
