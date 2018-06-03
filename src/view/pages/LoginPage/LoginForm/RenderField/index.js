import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({
  input,
  label,
  type,
  id,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input {...input} placeholder={label} type={type} id={id} className="form-control"/>
    {touched && error && <small className="text-danger">{error}</small>}
  </div>
);

RenderField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default RenderField;