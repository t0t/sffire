import React, { Component } from 'react'

export default class AddItem extends Component {
  handleSubmit(e){
    // if(e.keyCode === 13){
    //   this.props.add(this.refs.newItem.getDOMNode().value);
    //   this.refs.newItem.getDOMNode().value = '';
    // }
    return 'dsds';
    console.log('clickkkkk');
  }
  render() {
    return (
      <div>
        <input
          type="button"
          ref="newItem"
          onClick={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
