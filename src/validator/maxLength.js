export const maxLength = (value, constraint = {}) => {
  if (value !== "" && value !== null && value !== undefined) {
    return String(value).length > Number(constraint.value)
      && (constraint.message || "Value is too long");
  }
}
