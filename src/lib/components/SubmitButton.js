import React from 'react'
import { Button } from 'reactstrap'

const SubmitButton = ({ children, ...rest }) => (
  <Button
    type="submit"
    className="btn btn-lg btn-block mt-0"
    color="primary"
    {...rest}
  >
    {children}
  </Button>
)

export default SubmitButton
