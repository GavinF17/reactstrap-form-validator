import React, {useContext, useEffect, useState} from 'react';
import {VContext} from "./VForm";
import PropTypes from "prop-types";
import {FormFeedback} from "reactstrap";

const inputs = forProp => {
  if (typeof forProp === 'string') {
    return [forProp];
  }

  if (typeof forProp === 'object' && typeof forProp[Symbol.iterator] === 'function') {
    return forProp;
  }

  return [];
}

const allErrors = inputState => (
  !inputState
    ? []
    : [
      ...((!!inputState.externalErrors && inputState.externalErrors) || []),
      ...((!!inputState.errors && inputState.errors) || []),
    ]
);

export const VFormFeedback = (props) => {
  const context = useContext(VContext);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(
      inputs(props.for)
        .reduce((a, c) => [...a, ...allErrors(context.inputs[c])], [])
        .reduce((a, c, i) => [...a, ...(i > 0 ? [<br key={'error-' + i}/>, c] : [c])], [])
    );
  }, [props.for, context.inputs]);

  return (
    <>
      <div className={errors.length > 0 ? "is-invalid" : undefined}/>
      <FormFeedback valid={errors.length < 1}>
        {errors}
      </FormFeedback>
    </>
  );
};

VFormFeedback.propTypes = {
  for: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};
