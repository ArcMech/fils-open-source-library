function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'formik';
import FieldError from './FieldError';

const TextField = ({
  name,
  label,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(FormGroup, null, label && /*#__PURE__*/React.createElement(Label, {
    for: name
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    className: "form-control",
    type: "text",
    name: name
  }, rest)), /*#__PURE__*/React.createElement(FieldError, {
    name: name
  }));
};

export default TextField;