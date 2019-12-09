# react-time-convertor

> Convert timestamps to human readable format quickly. steps to use this plugin given below. You can use it in ReactJS & ReactNative. No need to link in ReactNative.

[![NPM](https://img.shields.io/npm/v/react-time-convertor.svg)](https://www.npmjs.com/package/react-time-convertor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-time-convertor
```

## Usage
It uses three props as `timestamp`, `type` and `style`.

`timestamp` accepts timestamp as input e.g. 1575439866

`type` accepts `chat | general | greet`

`style` accepts styling for timestamp

while you're using type `greet`, no need to pass timestamp. It will return a wish string as Good Morning | Good Noon | Good Afternoon | Good Evening.

```jsx
import React, { Component } from 'react'

import ReactTimeConvertor from 'react-time-convertor'

class Example extends Component {
  render () {
    return (
      <ReactTimeConvertor timestamp="1575439866" format="chat | general | greet" style={{color:'red'}} />
    )
  }
}
```

## License

 © [reactunlimited](https://github.com/reactunlimited)
