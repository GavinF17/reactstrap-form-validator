import React from 'react';
import {VInput} from "./VInput";

export const VCustomInput = (props) => (
  <VInput {...props} id={props.id || props.name} custom/>
);
