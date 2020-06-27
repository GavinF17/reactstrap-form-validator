import {isEmpty} from "./helper";

export const max = (value, constraint) => {
  if (!isEmpty(value)) {
    return Number(value) > Number(constraint.value)
      && (constraint.message || "Value is too large");
  }
}
