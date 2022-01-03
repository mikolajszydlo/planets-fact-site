import React from 'react';
import '../../../styles/settings.scss';
import styles from './Button.module.scss';

const Button = (props) => {
  console.log(props)
  return (
    <button 
      className = {`${styles.button} ${(props.contentType === 'overview' ? styles[props.activeLinkName] : '')}`} 
      onClick = {() => props.onClickFunc(props.contentType)}>
        <span className = {styles.numberId}>{props.buttonId}</span>{props.buttonText}
    </button>
  )
};

export default Button;