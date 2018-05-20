import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => 
      isAuthenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    } 
  />
);

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.auth.userId)
});

export default connect(mapStateToProps)(ProtectedRoute);