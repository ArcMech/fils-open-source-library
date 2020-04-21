import React, { useEffect } from 'react'
import { get, isString } from 'lodash'
import { useFormikContext } from 'formik'

const FormikErrors = ({ errors }) => {
  const { setErrors } = useFormikContext()
  useEffect(
    () => {
      setErrors(errors)
    },
    [setErrors, errors]
  )

  if (get(errors, 'non_field_errors')) {
    return <div className="mb-3 text-danger">{errors.non_field_errors}</div>
  } else if (isString(errors)) {
    return <div className="mb-3 text-danger">{errors}</div>
  } else {
    return null
  }
}

export default FormikErrors
