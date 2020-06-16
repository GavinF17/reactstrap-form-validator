import React, {useContext, useEffect} from 'react';
import {Input} from "reactstrap";
import {VContext} from "./VForm";

export const VInput = (props) => {
  const context = useContext(VContext);

  // Initialise input
  useEffect(() => {
    if (!context.inputs[props.name]) {
      context.updateInput(props.name, {
        initialValue: props.value,
        value: props.value,
        validators: props.validators
      })
    }
  })

  const updateValue = ({target: {value}}) => {
    context.updateValue(props.name, value);
  };

  const setBlurred = () => {
    const inputState = context.inputs[props.name];

    !inputState.blurred && context.blurInput(props.name);
  };

  const setFocused = () => {
    const inputState = context.inputs[props.name];

    !inputState.focused && context.focusInput(props.name);
  };

  const isInvalid = () => {
    return !!context.inputs[props.name] && !!context.inputs[props.name].errors;
  };

  const processedProps = {
    ...props,
    value: (context.inputs[props.name] && context.inputs[props.name].value) || ""
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
