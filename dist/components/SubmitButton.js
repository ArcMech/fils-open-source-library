function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button } from 'reactstrap';

const SubmitButton = ({
  children,
  ...rest
}) => /*#__PURE__*/React.createElement(Button, _extends({
  type: "submit",
  className: "btn btn-lg btn-block mt-0",
  color: "primary"
}, rest), children);

export default SubmitButton;