import React from 'react'
import Rebase from 're-base'
import Work from './Work'

const base = Rebase.createClass('https://sergiofores.firebaseio.com/')

class Works extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      works: []
    };
  }
  componentDidMount(){
    this.photosRef = base.bindToState('works', {
      context: this,
      state: 'works',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.photosRef);
  }

  render() {
    let worksList = this.state.works.map(function(data){
      return <Work {...data} />
    })
    return (
      <section className="Works">
        {worksList}
      </section>
    )
  }
}

export default Works
