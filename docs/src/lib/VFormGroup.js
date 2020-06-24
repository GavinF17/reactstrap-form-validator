"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VFormGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VFormGroup = function VFormGroup(props) {
  return /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, props);
};

exports.VFormGroup = VFormGroup;