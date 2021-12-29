import PropTypes from 'prop-types';

import styles from './Tile.module.scss';

const Tile = (props) => (
  <div className = {styles.container}>
    <h4>{props.tileTitle}</h4>
    <p className = {styles.cardContent}>{props.tileContent}</p>
  </div>
);

Tile.propTypes = {
  tileTitle: PropTypes.string,
  tileContent: PropTypes.string,
};

export default Tile;