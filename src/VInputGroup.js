import React from 'react';
import {InputGroup} from "reactstrap";

export const VInputGroup = (props) => {
  const {
    className,
    ...passedProps
  } = props;

  return (
    <InputGroup {...passedProps} className={"is-invalid " + (!!className ? className : "")}/>
  );
}
