import { useState } from 'react'
import { InputStyled, Caption, Tag, InputProps } from './styled'

export const Input = ({
  className,
  width = 260,
  warning = false,
  icon,
  subText,
  tag,
  borderless = false,
}: InputProps): JSX.Element => {
  const [focus, setFocus] = useState(false)
  return (
    <>
      <Tag>{tag?.name}</Tag>
      <InputStyled
        {...(className && { className })}
        {...(borderless && { borderless })}
        width={width}
        warning={warning}
        focus={focus}
        {...(icon && { icon })}
      >
        <input type='text' />
        <div>**</div>
      </InputStyled>
      {warning && <Caption {...(warning && { warning })}>{subText}</Caption>}
    </>
  )
}
