import {isEmpty} from "./helper";

export const maxLength = (value, constraint) => {
  if (!isEmpty(value)) {
    return String(value).length > Number(constraint.value)
      && (constraint.message || "Value is too long");
  }
}
