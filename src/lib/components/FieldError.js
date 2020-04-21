import React from 'react'
import { ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const StyledError = styled.div`
  color: #f45846;
`

const FieldError = ({ name }) => {
  const { t } = useTranslation()

  return (
    <ErrorMessage
      name={name}
      render={msg => <StyledError>{t(msg)}</StyledError>}
    />
  )
}

export default FieldError
