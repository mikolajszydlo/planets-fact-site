import React from 'react';
import '../../../styles/settings.scss';
import styles from './Button.module.scss';

const Button = (props) => {
  const { contentType, activeLinkName, buttonId, buttonText, onClickFunc } = props
   
  return (
    <button 
      className = {`${styles.button} ${(contentType === 'overview' ? styles[activeLinkName] : '')}`} 
      onClick = {() => onClickFunc(contentType)}>
        <span className = {styles.numberId}>{buttonId}</span>{buttonText}
    </button>
  )
};

export default Button;