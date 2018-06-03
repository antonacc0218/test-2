import React from 'react';
import { Form, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import validate from './validate';
import PropTypes from 'prop-types';
import CustomAlert from 'view/components/CustomAlert';

const LoadingText = () => (
  <React.Fragment>
    Проверяю{' '} 
    <i className="fa fa-spinner fa-pulse"/>
  </React.Fragment>
);

let LoginForm = ({
  handleSubmit,
  submitting,
  error
}) => (
    <React.Fragment>
      {
        Boolean(error) ? (
            <CustomAlert
                isValidationErrors={true}
                color={'danger'}
                message={error}
            />
        ) : ( null )
      }
      <Form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          id="emailField"
          label="Электронная почта"
          component={RenderField}
        />
        <Field
          name="password"
          type="password"
          label="Пароль"
          id="passwordField"
          component={RenderField}
        />
        <Button
          color="primary"
          disabled={submitting}
        >{submitting ? <LoadingText /> : 'Войти'}</Button>
      </Form>
    </React.Fragment>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);

