"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VForm = exports.VContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _validate = require("./validator/validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VContext = /*#__PURE__*/_react.default.createContext();

exports.VContext = VContext;

var inputsReducer = function inputsReducer(state, _ref) {
  var name = _ref.name,
      update = _ref.update;
  return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, _objectSpread(_objectSpread({}, state[name] || {}), update)));
};

var VForm = function VForm(props) {
  var _useReducer = (0, _react.useReducer)(inputsReducer, {}),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      inputs = _useReducer2[0],
      setInputs = _useReducer2[1];

  var updateInput = function updateInput(name) {
    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    setInputs({
      name: name,
      update: update
    });
  };

  (0, _react.useEffect)(function () {
    Object.keys(props.externalErrors).forEach(function (k) {
      return updateInput(k, {
        externalErrors: props.externalErrors[k]
      });
    });
  }, [props.externalErrors]);

  var validateInput = function validateInput(name, valueOverride) {
    var validators = inputs[name].validators;
    var value = valueOverride !== undefined ? valueOverride : inputs[name].value;
    var errors = (0, _validate.validate)(value, validators);
    updateInput(name, {
      errors: errors
    });
    return !errors;
  };

  var blurInput = function blurInput(name) {
    updateInput(name, {
      blurred: true
    });

    if (props.validateEvents.blur) {
      validateInput(name);
    }
  };

  var focusInput = function focusInput(name) {
    updateInput(name, {
      focused: true
    });

    if (props.validateEvents.focus) {
      validateInput(name);
    }
  };

  var updateValue = function updateValue(name, value) {
    updateInput(name, {
      changed: true,
      value: value
    });

    if (props.validateEvents.change) {
      validateInput(name, value);
    }
  };

  var validateAll = function validateAll() {
    return Object.keys(inputs).reduce(function (a, c) {
      return validateInput(c) && a;
    }, true);
  };

  var operations = {
    submitted: false,
    blurInput: blurInput,
    focusInput: focusInput,
    updateInput: updateInput,
    updateValue: updateValue,
    validateAll: validateAll
  };

  var getValuesObject = function getValuesObject() {
    return Object.keys(inputs).reduce(function (a, c) {
      return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, c, inputs[c].value));
    }, {});
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    context.submitted = true;
    operations.validateAll() ? !!props.onValidSubmit && props.onValidSubmit(getValuesObject()) : !!props.onInvalidSubmit && props.onInvalidSubmit(getValuesObject());
  };

  var context = _objectSpread({
    inputs: inputs,
    validateEvents: props.validateEvents
  }, operations);

  return /*#__PURE__*/_react.default.createElement(VContext.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, _extends({
    onSubmit: onSubmit
  }, props), props.children));
};

exports.VForm = VForm;
VForm.propTypes = {
  validateEvents: _propTypes.default.shape({
    blur: _propTypes.default.bool,
    focus: _propTypes.default.bool
  }).isRequired,
  onValidSubmit: _propTypes.default.func,
  onInvalidSubmit: _propTypes.default.func,
  submissionErrorProcessor: _propTypes.default.func
};
VForm.defaultProps = {
  validateEvents: {
    load: true,
    focus: false,
    blur: true,
    change: true
  },
  externalErrors: []
};