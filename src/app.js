import React from 'react'
//in es6 don't need to use var; use let or const
const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="dian"/>, document.body)
