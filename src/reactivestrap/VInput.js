import React, {useContext} from 'react';
import {Input} from "reactstrap";
import {VContext} from "./VForm";
import {validate} from "./validator/validate";

export const VInput = (props) => {
  const context = useContext(VContext);

  // Initialise
  if (!context.fields[props.name]) {
    context.putInput(props.name, {value: props.value})
  }

  const updateValue = ({target: {value}}) => {
    context.patchInput(props.name, {
      value,
      errors: (shouldValidate() && validate(value, props.validators)) || undefined
    });
  };

  const setBlurred = () => {
    const inputState = context.fields[props.name];

    !inputState.blurred && context.patchInput(props.name, {
      blurred: true,
      errors: (shouldValidate({blurred: true}) && validate(inputState.value, props.validators)) || undefined
    });
  };

  const setFocused = () => {
    const inputState = context.fields[props.name];

    !inputState.focused && context.patchInput(props.name, {
      focused: true,
      errors: (shouldValidate({focused: true}) && validate(inputState.value, props.validators)) || undefined
    });
  };

  const shouldValidate = ({blurred, focused} = {}) => {
    const inputState = context.fields[props.name];
    const validateEvents = context.validateEvents;

    return (validateEvents.load)
      || (validateEvents.blur && (blurred || inputState.blurred))
      || (validateEvents.focus && (focused || inputState.focused));
  }

  const isInvalid = () => {
    return context.fields[props.name] && context.fields[props.name].errors;
  };

  const processedProps = {
    ...props,
    value: context.fields[props.name] && context.fields[props.name].value
  };

  return (
    <Input
      invalid={isInvalid()}
      onFocus={setFocused}
      onBlur={setBlurred}
      onChange={updateValue}
      {...processedProps}
    />
  );
}
