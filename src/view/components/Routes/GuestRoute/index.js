import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => 
      isAuthenticated ? (
        <Redirect to='/profile' />
      ) : (
        <Component {...props} />
      )
    } 
  />
);

GuestRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.auth.userId)
});

export default connect(mapStateToProps)(GuestRoute);