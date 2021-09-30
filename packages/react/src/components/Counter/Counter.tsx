/* eslint-disable max-lines-per-function */
import React from 'react'
import { CounterProps } from './Counter.props'
import Label from '../_subcomponents/Label'
import styles from './Counter.styles'
import Button from '../Button'

const Counter = ({
  ariaLabelDecrementButton,
  ariaLabelIncrementButton,
  disabled,
  label,
  maxValue = 99,
  minValue = 0,
  onDecrement,
  onIncrement,
  size = 'semiX',
  testID,
  value = 0
}: CounterProps) => {
  const {
    buttonGroup, inputBase, buttonLeft, buttonRigth
  } = styles({ size, disabled })

  const maxReached = value >= maxValue
  const minReached = value <= minValue

  return (
    <div data-testid={testID}>
      {label && <Label color="mediumEmphasis" label={label} />}
      <div className={buttonGroup}>
        <Button
          ariaLabel={ariaLabelDecrementButton}
          className={buttonLeft}
          disabled={disabled || minReached}
          onClick={onDecrement}
          size={size}
          testID="onDecrement-btn"
          variant="text"
        >
          -
        </Button>
        <input
          className={inputBase}
          readOnly
          value={value}
        />
        <Button
          ariaLabel={ariaLabelIncrementButton}
          className={buttonRigth}
          disabled={disabled || maxReached}
          onClick={onIncrement}
          size={size}
          testID="onIncrement-btn"
          variant="text"
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default Counter