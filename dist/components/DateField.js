function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FieldError from './FieldError';
import moment from 'moment';

const DateField = ({
  name,
  label,
  ...rest
}) => {
  const {
    setFieldValue
  } = useFormikContext();
  const [field] = useField({
    name,
    label,
    ...rest
  });
  return /*#__PURE__*/React.createElement(FormGroup, null, label && /*#__PURE__*/React.createElement(Label, {
    for: name
  }, label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DatePicker, _extends({}, field, rest, {
    className: "form-control",
    showMonthDropdown: true,
    showYearDropdown: true,
    selected: field.value && new Date(field.value) || null,
    onChange: val => {
      setFieldValue(field.name, moment(val).format('YYYY-MM-DD'));
    }
  }))), /*#__PURE__*/React.createElement(FieldError, {
    name: name
  }));
};

export default DateField;