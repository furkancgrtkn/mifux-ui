import { useState } from 'react'
import { Wrapper, CheckboxStyled, CheckboxLabel, CheckboxProps } from './styled'

export const Checkbox = ({
  checked,
  className,
  props,
  size = 16,
  borderWidth = 1,
  id,
  onChange = () => null,
}: CheckboxProps): JSX.Element => {
  const [checkStat, setCheckStat] = useState(checked || false)
  return (
    <Wrapper {...(size && { size })} {...(className && { className })}>
      <CheckboxStyled
        id={id}
        type='checkbox'
        {...(checkStat && { checked: checkStat })}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setCheckStat(!checkStat)
          if (onChange) {
            onChange(e)
          }
        }}
        {...(size && { size })}
        {...(borderWidth && { borderWidth })}
        {...props}
      />
      <CheckboxLabel
        {...(size && { size })}
        {...(borderWidth && { borderWidth })}
        {...(id && { htmlFor: id })}
      />
    </Wrapper>
  )
}
