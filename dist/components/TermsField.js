import React from 'react';
import { FormGroup } from 'reactstrap';
import { Field, useFormikContext } from 'formik';
import FieldError from './FieldError';
import { useTranslation } from 'react-i18next';
import { calculateMonthlyCost, formatNumber } from './utils';
export const Term = ({
  name,
  value
}) => {
  const {
    t
  } = useTranslation();
  const {
    values,
    setFieldValue
  } = useFormikContext();
  return /*#__PURE__*/React.createElement("div", {
    className: "row border border-secondary mt-2 p-2 bg-white",
    style: {
      borderRadius: '2.4rem',
      cursor: 'pointer'
    },
    onClick: () => setFieldValue(name, value)
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1 align-items-center justify-content-center p-0 d-flex"
  }, /*#__PURE__*/React.createElement(Field, {
    type: "radio",
    name: name,
    value: value
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-5"
  }, value, " ", t('months.months')), /*#__PURE__*/React.createElement("div", {
    className: "col-6 text-right pr-5"
  }, formatNumber(calculateMonthlyCost({
    months: value,
    amount: values.amount,
    rate: 10
  })), ' ', /*#__PURE__*/React.createElement("small", null, "SAR")));
};

const TermsField = ({
  name,
  options
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, t('loan.months')), /*#__PURE__*/React.createElement("div", {
    className: "col-6 text-right pr-5"
  }, t('loan.monthly_cost'))), /*#__PURE__*/React.createElement("div", {
    className: "container mb-1"
  }, options.map(value => /*#__PURE__*/React.createElement(Term, {
    name: name,
    key: value,
    value: value
  }))), /*#__PURE__*/React.createElement(FieldError, {
    name: name
  }));
};

export default TermsField;