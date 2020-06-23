import React from 'react';
import {InputGroup} from "reactstrap";

export const VInputGroup = (props) => {
  return (
    <InputGroup className="is-invalid" {...props}/>
  );
}
