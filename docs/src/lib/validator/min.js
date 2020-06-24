"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = void 0;

var min = function min(value) {
  var constraint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value !== "" && value !== null && value !== undefined) {
    return Number(value) < Number(constraint.value) && (constraint.message || "Value is too small");
  }
};

exports.min = min;