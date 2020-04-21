import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import { Field } from 'formik'

import FieldError from './FieldError'

const TextField = ({ name, label, ...rest }) => {
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Field className="form-control" type="text" name={name} {...rest} />
      <FieldError name={name} />
    </FormGroup>
  )
}

export default TextField
