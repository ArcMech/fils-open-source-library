import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import { Field } from 'formik'
import MaskedInput from 'react-text-mask'

import FieldError from './FieldError'

const MaskedField = ({ name, label, mask, ...rest }) => {
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Field
        name={name}
        render={({ field }) => (
          <MaskedInput
            type="text"
            className="form-control"
            {...field}
            mask={mask}
            {...rest}
          />
        )}
      />

      <FieldError name={name} />
    </FormGroup>
  )
}

export default MaskedField
