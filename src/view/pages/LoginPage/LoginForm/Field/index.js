import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const Field = ({
  id,
  name,
  type,
  value,
  handleChange,
  placeholder
}) => (
  <FormGroup>
    <Label for={id}>
      {`${placeholder}:`}
    </Label>
    <Input 
      type={type} 
      id={id} 
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </FormGroup>
);

export default Field;