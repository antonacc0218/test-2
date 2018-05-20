import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => 
      isAuthenticated ? (
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    } 
  />
);

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.auth.userId)
});

export default connect(mapStateToProps)(GuestRoute);