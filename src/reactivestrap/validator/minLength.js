export const minLength = (value, constraint = {}) => {
  if (value !== "" && value !== null && value !== undefined) {
    return String(value).length < Number(constraint.value) && "Value is too short";
  }
}
