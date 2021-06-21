import { useState } from 'react'
import { Wrapper, RadioStyled, RadioLabel, RadioProps } from './styled'

export const Radio = ({
  checked,
  className,
  props,
  size = 18,
  borderWidth = 1,
  id,
  name,
  onChange = () => null,
}: RadioProps): JSX.Element => {
  const [checkStat, setCheckStat] = useState(!!checked)
  return (
    <Wrapper {...(size && { size })} {...(className && { className })}>
      <RadioStyled
        id={id}
        name={name}
        type='radio'
        checked={checkStat}
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
      <RadioLabel {...(size && { size })} {...(borderWidth && { borderWidth })} htmlFor={id} />
    </Wrapper>
  )
}
