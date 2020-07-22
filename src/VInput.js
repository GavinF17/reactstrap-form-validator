import React, {useContext, useEffect} from 'react';
import {CustomInput, Input} from "reactstrap";
import {VContext} from "./VForm";

const validationAttributes = ({min, max, minLength, maxLength, required, pattern}) => ({
  max: max && max.value,
  maxLength: maxLength && maxLength.value,
  min: min && min.value,
  minLength: minLength && minLength.value,
  pattern: pattern && pattern.value,
  required: !!required,
});

const getValueProcessor = (type, value) => {
  if (['checkbox', 'radio'].indexOf(type) > -1) {
    if (!!value) {
      return ({value, checked}) => (checked && value) || undefined;
    } else {
      return ({checked}) => checked;
    }
  } else {
    return ({value}) => value;
  }
}

export const VInput = (props) => {
  const {
    custom,
    ...passedProps
  } = props;

  const context = useContext(VContext);

  const processValue = getValueProcessor(props.type, props.value);

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

  const updateValue = ({target}) => {
    context.updateValue(props.name, processValue(target));
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
    ...passedProps,
    value: (context.inputs[props.name] && context.inputs[props.name].value) || ""
  };

  const InputComponent = custom ? CustomInput : Input;

  return (
    <InputComponent
      invalid={isInvalid()}
      onFocus={setFocused}
      onBlur={setBlurred}
      onChange={updateValue}
      {...processedProps}
      {...validationAttributes({...props.validators})}
    />
  );
}
