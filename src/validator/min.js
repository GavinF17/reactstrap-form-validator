import {isEmpty} from "./helper";

export const min = (value, constraint) => {
  if (!isEmpty(value)) {
    return Number(value) < Number(constraint.value)
      && (constraint.message || "Value is too small");
  }
}
