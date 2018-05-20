import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

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

export default Control;