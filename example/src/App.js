import React, { Component } from 'react'

import ReactTimeConvertor from 'react-time-convertor'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReactTimeConvertor timestamp='1575439866' style={{color:'red'}}/>
      </div>
    )
  }
}
