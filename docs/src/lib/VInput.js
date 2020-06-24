"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _VForm = require("./VForm");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VInput = function VInput(props) {
  var context = (0, _react.useContext)(_VForm.VContext); // Initialise input

  (0, _react.useEffect)(function () {
    var currentState = context.inputs[props.name];

    if (!currentState || currentState.initialValue !== props.value) {
      context.updateInput(props.name, {
        initialValue: props.value,
        value: props.value,
        validators: props.validators
      });
    }
  });

  var updateValue = function updateValue(_ref) {
    var value = _ref.target.value;
    context.updateValue(props.name, value);
  };

  var setBlurred = function setBlurred() {
    var inputState = context.inputs[props.name];
    !inputState.blurred && context.blurInput(props.name);
  };

  var setFocused = function setFocused() {
    var inputState = context.inputs[props.name];
    !inputState.focused && context.focusInput(props.name);
  };

  var isInvalid = function isInvalid() {
    return !!context.inputs[props.name] && (!!context.inputs[props.name].errors || !!context.inputs[props.name].externalErrors);
  };

  var processedProps = _objectSpread(_objectSpread({}, props), {}, {
    value: context.inputs[props.name] && context.inputs[props.name].value || ""
  });

  return /*#__PURE__*/_react.default.createElement(_reactstrap.Input, _extends({
    invalid: isInvalid(),
    onFocus: setFocused,
    onBlur: setBlurred,
    onChange: updateValue
  }, processedProps));
};

exports.VInput = VInput;