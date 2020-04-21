import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import FieldError from './FieldError'
import moment from 'moment'

const DateField = ({ name, label, ...rest }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField({ name, label, ...rest })

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <div>
        <DatePicker
          {...field}
          {...rest}
          className="form-control"
          showMonthDropdown
          showYearDropdown
          selected={(field.value && new Date(field.value)) || null}
          onChange={val => {
            setFieldValue(field.name, moment(val).format('YYYY-MM-DD'))
          }}
        />
      </div>
      <FieldError name={name} />
    </FormGroup>
  )
}

export default DateField
