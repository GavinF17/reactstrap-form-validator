import React from 'react';
import {InputGroup} from "reactstrap";

export const VInputGroup = (props) => {
  const {...passedProps} = props;

  return (
    <InputGroup {...passedProps}/>
  );
}
