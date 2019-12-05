import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

import styles from './styles.css'


export default function ReactTimeConvertor(props){
  const output = useConvert(props);
  const {style} = props;
    return (
      <div 
      // className={styles.test} 
      style={{...style}}>
      {output}
      </div>
    )
  }

  function useConvert(props){
    const {timestamp, type} = props;
    console.log(isNaN(timestamp)+" checked here", moment());
    if(isNaN(timestamp)){
      return "INVALID";
    }else{
      const tsobj = moment.unix(timestamp*1);
      let tconv = tsobj.format('hh:mm')
      let ctype = type ? type.toLowerCase() : '';
      switch(ctype){
        case 'chat' : {
          return tsobj.fromNow();
        }
        case 'general' : {return tsobj.format('DD-MM-YYYY hh:mm')}
        default : {return tsobj.format('DD-MM-YYYY hh:mm')}
      }
    }
  }

  
