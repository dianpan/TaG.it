//ES5
// var React = require('react')

// var Hello = React.createClass({
//   render: function() {
//     return <div>Hello, {this.props.name}</div>
//   }
// })

// React.render(<Hello name="dian"/>, document.body)

//ES6
import React from 'react'
require('./styles/main.css')

//ES6 doesn't use var; use let or const
const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="dian"/>, document.body)
