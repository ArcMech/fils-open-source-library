import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import { Field } from 'formik'

import FieldError from './FieldError'

const SelectField = ({ name, label, blank, options: _options, ...rest }) => {
  const options =
    typeof blank !== 'undefined'
      ? [['', blank]].concat(_options || [])
      : _options

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Field as="select" className="form-control" name={name} {...rest}>
        {(options || []).map(([value, label]) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Field>
      <FieldError name={name} />
    </FormGroup>
  )
}

export default SelectField
