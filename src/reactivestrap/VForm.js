import React, {useState} from 'react';
import {Form} from "reactstrap";
import PropTypes from "prop-types";

export const VContext = React.createContext();

export const VForm = (props) => {
  const [fields, setFields] = useState({});

  const operations = {
    putInput: (name, field = {}) => {
      setFields({...fields, [name]: field})
    },
    patchInput: (name, field = {}) => {
      setFields({...fields, [name]: {...fields[name], ...field}})
    }
  }

  const context = {
    fields,
    validateEvents: props.validateEvents,
    ...operations
  };

  return (
    <VContext.Provider value={context}>
      {JSON.stringify(fields)}
      <br/>
      {JSON.stringify(props.validateEvents)}
      <Form {...props}/>
    </VContext.Provider>
  );
}

VForm.propTypes = {
  validateEvents: PropTypes.shape({
    blur: PropTypes.bool,
    focus: PropTypes.bool,
  }).isRequired
};

VForm.defaultProps = {
  validateEvents: {
    load: false,
    focus: false,
    blur: true
  }
};
