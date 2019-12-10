import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

import styles from './styles.css'


export default function ReactTimeConvertor(props){
  const output = useConvert(props);
  const {style,platform} = props;
  if(platform=='mobile'){
    
    return output;
  }
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
    if(type=='greet'){
      let m = moment();
      let wish = "Good ";
      let hh = parseInt(m.format('HH'));
      let mm = parseInt(m.format('mm'));
      if(hh>=0 && hh<12){
        wish+="Morning";
      }
      else if(hh==12 && mm==0){
        wish+="Noon";
      }
      else if(hh>=12 && hh<17){
        wish+=" Afternoon";
      }
      else{
        wish+=" Evening";
      }
      return wish;
    }
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

  
