import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Control = ({ isAuthenticated, logout }) => (
  isAuthenticated ? (
    <Button color="primary" onClick={logout}>
      Выйти
    </Button>
  ) : (
    <Link to="/login" className="btn btn-primary">
      Войти
    </Link>
  )
);

Control.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default Control;