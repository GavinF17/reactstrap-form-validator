import * as validators from "./";

export const validate = (value, constraints) => {
  console.log(value)
  return constraints && Object.keys(constraints)
    .reduce((a, key) => {
      const error = validators[key](value, constraints[key]);
      return error
        ? [...(a ? [...a] : []), error]
        : a
    }, null);
};
