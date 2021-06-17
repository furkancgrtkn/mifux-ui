import { useState, useRef, MutableRefObject } from 'react'
import { Wrapper, InputStyled, IconWrapper, Caption, Tag, InputProps } from './styled'
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
  onChange = () => null,
  value,
}: InputProps): JSX.Element => {
  const wrapperRef = useRef(null)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [focus, setFocus] = useState(false)

  hooks.useOnClickOutside(wrapperRef, () => setFocus(false))
  return (
    <Wrapper {...(className && { className })} {...(width && { width })}>
      <Tag>{tag?.name}</Tag>
      <InputStyled
        onClick={() => {
          setFocus(true)
          if (inputRef) {
            inputRef.current.focus()
          }
        }}
        ref={wrapperRef}
        {...(borderless && { borderless })}
        {...(warning && { warning })}
        {...(icon && { icon })}
        focus={!!focus}
      >
        <input
          onChange={(e: any) => onChange(e)}
          ref={inputRef}
          {...(placeholder && { placeholder })}
          {...(value && { value })}
          type='text'
        />
        {icon && (
          <IconWrapper {...(warning && { warning })} focus={!!focus}>
            {icon?.item}
          </IconWrapper>
        )}
      </InputStyled>
      {warning && <Caption {...(warning && { warning })}>{subText}</Caption>}
    </Wrapper>
  )
}
