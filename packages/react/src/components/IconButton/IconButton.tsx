import React from 'react'
import { IconColor, IconSize } from '../Icon/Icon.props'
import { Icon } from '../Icon'
import IconButtonBase from './IconButtonBase'
import { IconButtonColors, IconButtonProps, IconButtonSize } from './IconButton.props'
import styles from './IconButton.styles'

export const getIconSize = (size: IconButtonSize) => {
  const iconSize = {
    medium: 'semiX',
    semi: 'standard',
    semiX: 'semi'
  }

  return iconSize[size]
}

export const checkIconColor = (
  backgroundStyle: string, isDisabled: boolean, color: IconButtonColors
) => {
  if (isDisabled) {
    return backgroundStyle === 'overlay' ? 'lowEmphasis' : 'mediumEmphasis'
  }
  return color
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  ariaLabel,
  backgroundStyle = 'none',
  className = '',
  color = 'highEmphasis',
  disabled = false,
  iconName,
  onClick,
  size = 'semi',
  testID
}, ref) => {
  const { iconButtonContainer } = styles({ disabled, backgroundStyle, size })
  const iconSize = getIconSize(size) as IconSize
  const iconColor = checkIconColor(backgroundStyle, disabled, color) as IconColor

  return (
    <IconButtonBase
      ariaLabel={ariaLabel}
      className={`${className} ${iconButtonContainer}`}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      size={size}
      testID={testID}
      IconComponent={(
        <Icon
          ariaHidden
          color={iconColor}
          name={iconName}
          role="button"
          size={iconSize}
        />
      )}
    />
  )
})

export default IconButton
