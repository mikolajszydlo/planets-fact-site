import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = (props) => {
  const iconUrl = './assets/icon-source.svg';

  return (
    <div>
      <p className = {styles.cardContent}>{props.planetData}</p>
      <p className = {styles.source} > 
        Source: 
        <a className = {styles.sourceLink} href ={props.contentSource} target = 'blank' >
          Wikipedia
          <img className = {styles.arrowIcon} src = {iconUrl} alt = 'Arrow' />
        </a>
      </p>
    </div>
  );
};

Card.propTypes = {
  planetData: PropTypes.string,
};

export default Card;