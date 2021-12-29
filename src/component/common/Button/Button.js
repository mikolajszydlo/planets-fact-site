import React from 'react';
import '../../../styles/settings.scss';
import styles from './Button.module.scss';

class Button extends React.Component {


  changeContentType(contentType){
    this.setState(state => ({
      contentType: contentType}
    ));
  };

  render() {
    const {activeLinkName, contentType, onClickAddress} = this.props;

    return (
      <button 
        className = {`${styles.button} ${(contentType === 'overview' ? styles[activeLinkName] : '')}`} 
        onClick = {() => this.changeContentType(onClickAddress)}>
          <span className = {styles.numberId}>01</span>{onClickAddress}
      </button>
    );
  };
};

export default Button;