import {isEmpty} from "./helper";

export const required = (value, constraint) => (
  isEmpty(value) && (constraint.message || "Value is required")
);
