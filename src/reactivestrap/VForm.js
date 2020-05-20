import React, {useState} from 'react';
import {Form} from "reactstrap";

export const VContext = React.createContext();

export const VForm = (props) => {
  const [fields, setFields] = useState({});

  const operations = {
    updateField: (name, field = {}) => {
      setFields({...fields, [name]: field})
    },
    isInvalid: name => !!fields[name]
  }

  return (
    <VContext.Provider value={{fields, ...operations}}>
      <Form {...props}/>
    </VContext.Provider>
  );
}
