export const min = (value, constraint = {}) => {
  if (value !== "" && value !== null && value !== undefined) {
    return Number(value) < Number(constraint.value)
      && (constraint.message || "Value is too small");
  }
}
