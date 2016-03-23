import React from 'react';
import Firebase from 'firebase';

class Skills extends React.Component {
  constructor(props){
    super(props);
    this.content = {};
    this.url = 'https://sergiofores.firebaseapp.com/';
  }
  render() {
    let ref = new Firebase("https://sergiofores.firebaseio.com/blog/1/content");
    ref.on("value", (snapshot) => { this.content = snapshot.val(); });

    return (
      <section>
        <h1>{this.content.header}</h1>
        <img src={this.url+this.content.img}/>
        <p>{this.content.p}qq</p>
      </section>
    )
  }
}

export default Skills;
