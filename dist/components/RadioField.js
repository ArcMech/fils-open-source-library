import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'formik';
import FieldError from './FieldError';

const RadioField = ({
  name,
  label,
  options
}) => /*#__PURE__*/React.createElement(FormGroup, null, (options || []).map(([value, label]) => /*#__PURE__*/React.createElement(Label, {
  className: "custom-control custom-radio",
  key: value
}, /*#__PURE__*/React.createElement(Field, {
  className: "custom-control-input",
  type: "radio",
  name: name,
  value: value
}), /*#__PURE__*/React.createElement("span", {
  className: "custom-control-label"
}, label))), /*#__PURE__*/React.createElement(FieldError, {
  name: name
}));

export default RadioField;