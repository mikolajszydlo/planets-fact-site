import React from 'react';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import Planet from '../../views/Planet/Planet';

class MainLayout extends React.Component {

  state = {
    contentType: 'overview',
  };

  resetState(){
    this.setState('overview')
  }

  changeContentType(contentType){
    this.setState({contentType});
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to = '/Mercury' />
          </Route>
          <Route exact path='/:planetId'>
            <Planet contentType = {this.state.contentType} changeContentType = {this.changeContentType.bind(this)} />
          </Route>
        </Switch>
      </div>
    )
  };
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;