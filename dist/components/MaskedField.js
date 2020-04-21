function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'formik';
import MaskedInput from 'react-text-mask';
import FieldError from './FieldError';

const MaskedField = ({
  name,
  label,
  mask,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(FormGroup, null, label && /*#__PURE__*/React.createElement(Label, {
    for: name
  }, label), /*#__PURE__*/React.createElement(Field, {
    name: name,
    render: ({
      field
    }) => /*#__PURE__*/React.createElement(MaskedInput, _extends({
      type: "text",
      className: "form-control"
    }, field, {
      mask: mask
    }, rest))
  }), /*#__PURE__*/React.createElement(FieldError, {
    name: name
  }));
};

export default MaskedField;