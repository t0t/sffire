import React from 'react';
import Firebase from 'firebase';

//github.com/aydrian/sparkpost-firebase-demo/blob/7b0e5da363f32e09b994b93163305bf83f56f03b/app/components/Home.js

class Home extends React.Component {
 constructor(props){
    super(props);
    this.content = {};
  }
  render() {
    let ref = new Firebase("https://sergiofores.firebaseio.com/brand");
    ref.on("value", (snapshot) => { this.content = snapshot.val(); });
    return (
      <header className="Site__header">
        <h1>{this.content.description}xx</h1>
        <p>{this.content.title}xxx</p>
        <p>{this.props.children}xx</p>
      </header>
    )
  }
}

export default Home;
