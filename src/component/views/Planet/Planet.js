import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

import planets from '../../../data/data.json';
import Card from '../../common/Card/Card';
// import Button from '../../common/Button/Button';
import Image from '../../common/Image/Image';
import Tile from '../../common/Tile/Tile';
import styles from './Planet.module.scss';

class Planet extends React.Component {
  
  state = {
    contentType: 'overview',
  };

  changeContentType(contentType){
    this.setState(state => ({
      contentType: contentType}
    ));
  };

  render() {

    const planetName = this.props.match.params.planetId
    const contentType = this.state.contentType
    const planetData = planets.filter(planet => (planet.name === planetName) && planet)[0]
    const planetDescription = planetData[contentType].content;
    const contentSource = planetData[contentType].source;
    const activeLinkName = planetName.toLowerCase();

    const selectImagesToRender = (contentType) => {
      if(contentType === 'overview'){
        return [planetData.images.planet]
      } else if(contentType === 'structure'){
        return [planetData.images.internal]
      } else if(contentType === 'geology'){
        return [planetData.images.planet, planetData.images.geology]
      }
    };

    const selectedImagesUrls = (selectImagesToRender(contentType));

    return (
      <div>
          <Grid>
            <Row className = {styles.planetContainer}>
              <Col lg={8}>
                <Image imageUrl = {selectedImagesUrls} />
              </Col>
              <Col lg={4}>
                <h2>{planetName}</h2>
                <Card planetData = {planetDescription} contentSource = {contentSource} />
                {/* <Button activeLinkName = {activeLinkName} contentType = {contentType} onClickAddress = {`overview`}/>
                <Button activeLinkName = {activeLinkName} contentType = {contentType} onClickAddress = {`structure`}/>
                <Button activeLinkName = {activeLinkName} contentType = {contentType} onClickAddress = {`geology`}/> */}
                <button 
                  className = {`${styles.button} ${(contentType === 'overview' ? styles[activeLinkName] : '')}`} 
                  onClick = {() => this.changeContentType('overview')}>
                     <span className = {styles.numberId}>01</span>Overview
                </button>
                <button 
                  className = {`${styles.button} ${(contentType === 'structure' ? styles[activeLinkName] : '')}`} 
                  onClick = {() => this.changeContentType('structure')}>
                     <span className = {styles.numberId}>02</span>Internal Structure</button>
                <button
                  className = {`${styles.button} ${(contentType === 'geology' ? styles[activeLinkName] : '')}`} 
                  onClick = {() => this.changeContentType('geology')}>
                     <span className = {styles.numberId}>03</span>Geology
                </button>
              </Col>
            </Row>
            <Row className = {styles.tiles} between = 'xs'>
              <Tile tileTitle = {'Rotation:'} tileContent = {planetData.rotation}/>
              <Tile tileTitle = {'Revolution:'} tileContent = {planetData.revolution}/>
              <Tile tileTitle = {'Radius:'} tileContent = {planetData.radius}/>
              <Tile tileTitle = {'Temperature:'} tileContent = {planetData.temperature}/>
            </Row>
          </Grid>
      </div>
    )
  };
};

export default Planet;