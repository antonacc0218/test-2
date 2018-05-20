import React from 'react';
import { Form, Button } from 'reactstrap';
import Field from './Field';

const LoadingText = () => (
  <React.Fragment>
    Проверяю{' '} 
    <i className="fa fa-spinner fa-pulse"></i>
  </React.Fragment>
);

const LoginForm = ({ 
  handleChange, 
  handleSubmit,
  credentials,
  loading 
}) => (
  <Form onSubmit={handleSubmit}>
    <Field 
      name="email"
      type="email"
      id="emailField"
      handleChange={handleChange}
      value={credentials.email}
      placeholder="Электронная почта"
    />
    <Field 
      name="password"
      type="password"
      id="passwordField"
      handleChange={handleChange}
      value={credentials.password}
      placeholder="Пароль"
    />
    <Button 
      color="primary"
      disabled={loading}
    >{loading ? <LoadingText /> : 'Войти'}</Button>
  </Form>
);

export default LoginForm;
