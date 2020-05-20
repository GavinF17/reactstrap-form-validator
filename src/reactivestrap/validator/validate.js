import * as validators from "./";

export const validate = (value, constraints) => {
  return Object.keys(constraints)
    .reduce((a, key) => {
      const error = validators[key](value, constraints[key]);
      return error
        ? [...(a ? [...a] : []), error]
        : a
    }, null);
};
