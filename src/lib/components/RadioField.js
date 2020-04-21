import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import { Field } from 'formik'

import FieldError from './FieldError'

const RadioField = ({ name, label, options }) => (
  <FormGroup>
    {(options || []).map(([value, label]) => (
      <Label className="custom-control custom-radio" key={value}>
        <Field
          className="custom-control-input"
          type="radio"
          name={name}
          value={value}
        />
        <span className="custom-control-label">{label}</span>
      </Label>
    ))}
    <FieldError name={name} />
  </FormGroup>
)

export default RadioField
