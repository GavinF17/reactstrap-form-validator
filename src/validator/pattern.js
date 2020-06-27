import {isEmpty} from "./helper";

export const pattern = (value, constraint) => {
  if (!isEmpty(value)) {
    return !(new RegExp(constraint.value)).test(String(value))
      && (constraint.message || "Value formatted incorrectly");
  }
}
