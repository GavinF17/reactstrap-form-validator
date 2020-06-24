"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = void 0;

var max = function max(value) {
  var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value !== "" && value !== null && value !== undefined) {
    return Number(value) > Number(constraint.value) && (constraint.message || "Value is too large");
  }
};

exports.max = max;