"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLength = void 0;

var minLength = function minLength(value) {
  var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value !== "" && value !== null && value !== undefined) {
    return String(value).length < Number(constraint.value) && (constraint.message || "Value is too short");
  }
};

exports.minLength = minLength;