import React from 'react'
import Rebase from 're-base'
import Work from './Work'

const base = Rebase.createClass('https://sergiofores.firebaseio.com/')

class Works extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      works: null,
      loading: true
    };
  }

  componentDidMount(){
    this.ref = base.fetch('works', {
      context: this,
      asArray: true,
      then(data) {
        console.log(data)
        this.setState({
          loading: false,
          works: data
        })
      }
    });
  }

  // componentWillUnmount(){
  //   base.removeBinding(this.ref);
  // }

  render() {


    if (this.state.loading === true) {
      console.log('cargando')
      return (
        <div className="Loading"></div>
      )
    } else {
      console.log('cargado')
      let worksList = this.state.works.map(function(datos){
        return <Work {...datos} />
      })
      return (
        <section className="Works">
        {worksList}
        </section>
      )
    }
  }
}

export default Works
