import { useState, useRef } from 'react'
import { Wrapper, InputStyled, Caption, Tag, InputProps } from './styled'
import hooks from '../../hooks'

export const Input = ({
  className,
  width = 260,
  warning = false,
  icon,
  subText,
  tag,
  borderless = false,
  placeholder,
}: InputProps): JSX.Element => {
  const inputRef = useRef(null)
  const [focus, setFocus] = useState(false)

  hooks.useOnClickOutside(inputRef, () => setFocus(false))
  return (
    <Wrapper width={width}>
      <Tag>{tag?.name}</Tag>
      <InputStyled
        onClick={() => setFocus(true)}
        ref={inputRef}
        {...(className && { className })}
        {...(borderless && { borderless })}
        warning={warning}
        focus={focus}
        {...(icon && { icon })}
      >
        <input {...(placeholder && { placeholder })} type='text' />
        <div>**</div>
      </InputStyled>
      {warning && <Caption {...(warning && { warning })}>{subText}</Caption>}
    </Wrapper>
  )
}
