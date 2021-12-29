import { NavLink } from 'react-router-dom';
import { Col, Grid, Row } from 'react-flexbox-grid';

import styles from './Header.module.scss';
import planets from '../../../data/data.json';

const Header = () => {
  const shortid = require('shortid');

  return (
    <Grid className = {styles.containter}>
      <header>
        <Row className = {styles.row}>
          <Col className = {styles.logo} lg={6}>
            <h1>The Planets</h1>
          </Col>
          <Col className = {styles.navColumn} lg={6}>
              <nav className = {`${styles.navigation} ${styles.navContainer}`}>
                {planets.map(planet => (
                  <NavLink
                    key = {shortid.generate()}
                    className = {`${styles[planet.name.toLowerCase()]} ${styles.navLink}`} 
                    activeClassName = {styles.active} 
                    exact to = {`/${planet.name}`}
                  >
                    {planet.name}
                  </NavLink>
                ))}
              </nav>
          </Col>
        </Row>
      </header>
    </Grid>
  );
};

export default Header; 