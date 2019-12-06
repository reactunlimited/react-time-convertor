# react-time-convertor

> convert time stamp to human readble format

[![NPM](https://img.shields.io/npm/v/react-time-convertor.svg)](https://www.npmjs.com/package/react-time-convertor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-time-convertor
```

## Usage
It uses three props as `timestamp`, `type` and `style`.

`timestamp` accepts timestamp as input e.g. 1575439866

`type` accepts `chat | general`

`style` accepts styling for timestamp

```jsx
import React, { Component } from 'react'

import ReactTimeConvertor from 'react-time-convertor'

class Example extends Component {
  render () {
    return (
      <ReactTimeConvertor timestamp="1575439866" format="chat | general" style={{color:'red'}} />
    )
  }
}
```

## License

 © [reactunlimited](https://github.com/reactunlimited)
