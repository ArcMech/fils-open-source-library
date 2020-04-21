import React, { useEffect } from 'react';
import { get, isString } from 'lodash';
import { useFormikContext } from 'formik';

const FormikErrors = ({
  errors
}) => {
  const {
    setErrors
  } = useFormikContext();
  useEffect(() => {
    setErrors(errors);
  }, [setErrors, errors]);

  if (get(errors, 'non_field_errors')) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb-3 text-danger"
    }, errors.non_field_errors);
  } else if (isString(errors)) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb-3 text-danger"
    }, errors);
  } else {
    return null;
  }
};

export default FormikErrors;