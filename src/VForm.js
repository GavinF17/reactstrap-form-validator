import React, {useEffect, useReducer} from 'react';
import {Form} from "reactstrap";
import PropTypes from "prop-types";
import {validate} from "./validator/validate";

export const VContext = React.createContext();

const inputsReducer = (state, {name, update}) => ({
  ...state,
  [name]: {...(state[name] || {}), ...update}
});

export const VForm = (props) => {
  const [inputs, setInputs] = useReducer(inputsReducer, {});

  const updateInput = (name, update = {}) => {
    setInputs({name, update});
  }

  useEffect(() => {
    Object.keys(props.externalErrors).forEach(k => updateInput(k, {externalErrors: props.externalErrors[k]}))
  }, [props.externalErrors]);

  const validateInput = (name, valueOverride) => {
    const validators = inputs[name].validators;
    const value = valueOverride !== undefined ? valueOverride : inputs[name].value;
    const errors = validate(value, validators);
    updateInput(name, {errors});
    return !errors;
  };

  const blurInput = name => {
    updateInput(name, {blurred: true});

    if (props.validateEvents.blur) {
      validateInput(name);
    }
  };

  const focusInput = name => {
    updateInput(name, {focused: true});

    if (props.validateEvents.focus) {
      validateInput(name);
    }
  };

  const updateValue = (name, value) => {
    updateInput(name, {changed: true, value});

    if (props.validateEvents.change) {
      validateInput(name, value);
    }
  }

  const validateAll = () => Object.keys(inputs).reduce((a, c) => validateInput(c) && a, true);

  const operations = {
    submitted: false,
    blurInput,
    focusInput,
    updateInput,
    updateValue,
    validateAll
  }

  const getValuesObject = () => Object.keys(inputs).reduce((a, c) => ({...a, [c]: inputs[c].value}), {});

  const onSubmit = (e) => {
    e.preventDefault();

    context.submitted = true;

    operations.validateAll()
      ? !!props.onValidSubmit && props.onValidSubmit(getValuesObject())
      : !!props.onInvalidSubmit && props.onInvalidSubmit(getValuesObject())
  }

  const context = {
    inputs,
    validateEvents: props.validateEvents,
    ...operations
  };

  return (
    <VContext.Provider value={context}>
      <Form onSubmit={onSubmit} {...props}>
        {props.children}
      </Form>
    </VContext.Provider>
  );
}

VForm.propTypes = {
  validateEvents: PropTypes.shape({
    blur: PropTypes.bool,
    focus: PropTypes.bool,
  }).isRequired,
  onValidSubmit: PropTypes.func,
  onInvalidSubmit: PropTypes.func,
  submissionErrorProcessor: PropTypes.func
};

VForm.defaultProps = {
  validateEvents: {
    load: true,
    focus: false,
    blur: true,
    change: true
  },
  externalErrors: []
};
