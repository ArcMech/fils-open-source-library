import React from 'react';
import { ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const StyledError = styled.div`
  color: #f45846;
`;

const FieldError = ({
  name
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(ErrorMessage, {
    name: name,
    render: msg => /*#__PURE__*/React.createElement(StyledError, null, t(msg))
  });
};

export default FieldError;