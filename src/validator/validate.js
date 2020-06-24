import * as validators from "./index";

export const validate = (value, constraints) => (
  constraints && Object.keys(constraints)
    .reduce((a, key) => {
      const error = validators[key](value, constraints[key]);
      return error
        ? [...(a ? [...a] : []), error]
        : a
    }, null)
);
