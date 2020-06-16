import React, {useContext} from 'react';
import {FormFeedback} from "reactstrap";
import {VContext} from "./VForm";
import PropTypes from "prop-types";

export const VFormFeedback = (props) => {
  const context = useContext(VContext);

  const inputErrors = input => context.inputs[input] && context.inputs[input].errors;

  const allErrors = () => {
    if (typeof props.for === 'string') {
      return inputErrors(props.for);
    }

    if (typeof props.for === 'object' && typeof props.for[Symbol.iterator] === 'function') {
      return props.for.reduce((a, c) => {
        const fes = inputErrors(c);
        return fes
          ? [...a, ...fes]
          : a;
      }, []);
    }
  };

  const errors = allErrors();

  const errorMessage = errors
    ? errors && errors.reduce((a, c, i) => [...a, ...(i > 0 ? [<br key={"error-" + i}/>, c] : c)], [])
    : "Input is invalid";

  return (
    <FormFeedback valid={(props.for && !errors) || props.valid}>
      {errorMessage}
    </FormFeedback>
  );
};

VFormFeedback.propTypes = {
  for: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};
