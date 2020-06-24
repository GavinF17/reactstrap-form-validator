"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxLength = void 0;

var maxLength = function maxLength(value) {
  var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value !== "" && value !== null && value !== undefined) {
    return String(value).length > Number(constraint.value) && (constraint.message || "Value is too long");
  }
};

exports.maxLength = maxLength;