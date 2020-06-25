import React from 'react';
import {FormGroup} from "reactstrap";

export const VFormGroup = (props) => {
  const {...passedProps} = props;

  return (
    <FormGroup {...passedProps}/>
  );
}
