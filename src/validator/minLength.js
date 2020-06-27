import {isEmpty} from "./helper";

export const minLength = (value, constraint) => {
  if (!isEmpty(value)) {
    return String(value).length < Number(constraint.value)
      && (constraint.message || "Value is too short");
  }
}
