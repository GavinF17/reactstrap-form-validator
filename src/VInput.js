import React, {useContext, useEffect} from 'react';
import {Input} from "reactstrap";
import {VContext} from "./VForm";

const validationAttributes = ({min, max, minLength, maxLength, required, pattern}) => ({
  max: max && max.value,
  maxLength: maxLength && maxLength.value,
  min: min && min.value,
  minLength: minLength && minLength.value,
  pattern: pattern && pattern.value,
  required: !!required,
});

export const VInput = (props) => {
  const context = useContext(VContext);

  // Initialise input
  useEffect(() => {
    const currentState = context.inputs[props.name];
    if (!currentState || currentState.initialValue !== props.value) {
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
    return !!context.inputs[props.name] && (!!context.inputs[props.name].errors || !!context.inputs[props.name].externalErrors);
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
      {...validationAttributes({...props.validators})}
    />
  );
}
