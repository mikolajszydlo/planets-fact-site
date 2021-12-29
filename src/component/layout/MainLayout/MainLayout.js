import Header from '../Header/Header';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss'

const MainLayout = ({children}) => (
  <div>
      <Header />
      {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;