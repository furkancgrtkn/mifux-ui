import { useState, useRef, MutableRefObject } from 'react'
import { Wrapper, InputStyled, IconWrapper, Caption, Tag, InputProps } from './styled'
import hooks from '../../hooks'
import { useTheme, Theme } from '../../theme'

export const Input = ({
  className,
  block,
  width = '260px',
  warning = false,
  icon,
  subText,
  tag,
  borderless = false,
  placeholder,
  onChange = () => null,
  value,
  props,
}: InputProps): JSX.Element => {
  const theme = useTheme()
  const wrapperRef = useRef(null)
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [focus, setFocus] = useState(false)
  hooks.useOnClickOutside(wrapperRef, () => setFocus(false))

  const handleBorderColor = (
    warningStatus: boolean,
    colors: Theme['input']['colors'],
    focusStatus?: boolean
  ) => {
    if (warningStatus) {
      return colors.warning
    }
    if (focusStatus) {
      return colors.focus
    }

    return colors.default
  }
  return (
    <Wrapper {...(className && { className })} {...(width && { width })} {...(block && { block })}>
      <Tag>{tag?.name}</Tag>
      <InputStyled
        onClick={() => {
          setFocus(true)
          if (inputRef) {
            inputRef.current.focus()
          }
        }}
        ref={wrapperRef}
        {...(focus && { focus })}
        {...(borderless && { borderless })}
        {...(warning && { warning })}
        {...(icon && { icon })}
      >
        <input
          onChange={(e: any) => onChange(e)}
          ref={inputRef}
          {...(placeholder && { placeholder })}
          {...(value && { value })}
          type='text'
          {...props}
        />
        {icon && (
          <IconWrapper {...(warning && { warning })} {...(focus && { focus })}>
            {{
              ...(icon.item as object),
              props: {
                ...(icon.item?.props as object),
                color: handleBorderColor(warning, theme.input.colors, focus),
              },
            }}
          </IconWrapper>
        )}
      </InputStyled>
      {warning && <Caption {...(warning && { warning })}>{subText}</Caption>}
    </Wrapper>
  )
}
