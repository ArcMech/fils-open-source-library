function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'formik';
import FieldError from './FieldError';

const SelectField = ({
  name,
  label,
  blank,
  options: _options,
  ...rest
}) => {
  const options = typeof blank !== 'undefined' ? [['', blank]].concat(_options || []) : _options;
  return /*#__PURE__*/React.createElement(FormGroup, null, label && /*#__PURE__*/React.createElement(Label, {
    for: name
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    as: "select",
    className: "form-control",
    name: name
  }, rest), (options || []).map(([value, label]) => /*#__PURE__*/React.createElement("option", {
    value: value,
    key: value
  }, label))), /*#__PURE__*/React.createElement(FieldError, {
    name: name
  }));
};

export default SelectField;