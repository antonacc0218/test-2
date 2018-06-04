import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => 
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    } 
  />
);

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.auth.userId)
});

export default connect(mapStateToProps)(ProtectedRoute);