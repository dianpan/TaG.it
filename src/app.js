import React from 'react'
import styles from './styles/main.css'

//ES6 doesn't use var; use let or const
const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="dian"/>, document.body)
