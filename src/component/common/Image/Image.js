import styles from './Image.module.scss';

const Image = (props) => {
  const shortid = require('shortid');

  return (
    <div className = {styles.imageContainer}>
      {props.imageUrl.map(imageUrl => (
        <img className = {styles.image} key = {shortid.generate()} src = {imageUrl} alt = 'Planet visualization' />
      ))}
    </div>
  )
};

export default Image;