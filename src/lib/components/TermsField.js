import React from 'react'
import { FormGroup } from 'reactstrap'
import { Field, useFormikContext } from 'formik'

import FieldError from './FieldError'
import { useTranslation } from 'react-i18next'
import { calculateMonthlyCost, formatNumber } from '../../utils'

export const Term = ({ name, value }) => {
  const { t } = useTranslation()
  const { values, setFieldValue } = useFormikContext()
  return (
    <div
      className="row border border-secondary mt-2 p-2 bg-white"
      style={{ borderRadius: '2.4rem', cursor: 'pointer' }}
      onClick={() => setFieldValue(name, value)}
    >
      <div className="col-1 align-items-center justify-content-center p-0 d-flex">
        <Field type="radio" name={name} value={value} />
      </div>
      <div className="col-5">{value} {t('months.months')}</div>
      <div className="col-6 text-right pr-5">
        {formatNumber(
          calculateMonthlyCost({
            months: value,
            amount: values.amount,
            rate: 10
          })
        )}{' '}
        <small>SAR</small>
      </div>
    </div>
  )
}

const TermsField = ({ name, options }) => {
  const { t } = useTranslation()
  return (
    <FormGroup>
      <div className="row">
        <div className="col-6">{t('loan.months')}</div>
        <div className="col-6 text-right pr-5">{t('loan.monthly_cost')}</div>
      </div>
      <div className="container mb-1">
        {options.map(value => (
          <Term name={name} key={value} value={value} />
        ))}
      </div>
      <FieldError name={name} />
    </FormGroup>
  )
}

export default TermsField
