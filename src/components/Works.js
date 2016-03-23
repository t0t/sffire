import React from 'react';
import Firebase from 'firebase';

class Works extends React.Component {

  constructor(props){
    super(props);
    this.val = {};
    this.state = {
      test: 'Bienvenido',
      test2: 'test'
    };
  }

  render() {
    let ref = new Firebase("https://sergiofores.firebaseio.com/portafolio/graphic/catalogos");
    ref.on("value", (snapshot) => {
      snapshot.forEach( (childSnapshot) => {
        this.val = childSnapshot.val();
      });
    });
    return (
      <section>
        <h1>{this.val.title}bb</h1>
        <p>{this.val.description}xx</p>
        <p>{this.state.test}</p>
      </section>
    )
  }
}

export default Works;
