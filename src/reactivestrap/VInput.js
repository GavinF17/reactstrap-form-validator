import React, {useContext} from 'react';
import {Input} from "reactstrap";
import {VContext} from "./VForm";
import {validate} from "./validator/validate";

export const VInput = (props) => {
  const context = useContext(VContext);

  // Initialise
  if (!context.fields[props.name]) {
    context.updateField(props.name)
  }

  const validateInput = ({target: {value}}) => {
    const errors = validate(value, props.validators);
    context.updateField(props.name, {
      value,
      errors
    });
  };

  return (
    <Input onChange={validateInput} {...props}/>
  );
}
