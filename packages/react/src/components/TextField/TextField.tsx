import React from 'react'
import { TextFieldProps } from './TextField.props'
import styles from './TextField.styles'

const TextField = ({
  action = 'none',
  disabled = false,
  feedback = 'none',
  helperText,
  label,
  placeholder,
  readOnly = false,
  required = false,
  size = 'mediumX',
  testID,
  type = 'text'
}: TextFieldProps): JSX.Element => {
  const classes = styles({ disabled, feedback, size })

  return (
    <div className={classes.container}>
      <label className={classes.label}>
        {label}
        {required && '*'}
      </label>
      <input
        data-testid={testID}
        className={classes.input}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        type={type}
      />
      <span className={classes.helperText}>{helperText}</span>
    </div>
  )
}

export default TextField
