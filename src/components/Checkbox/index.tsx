import { Wrapper, CheckboxStyled, CheckboxLabel, CheckboxProps } from './styled'

export const Checkbox = ({
  checked,
  className,
  props,
  size = 16,
  borderWidth = 1,
  id,
  onChange = () => null,
}: CheckboxProps): JSX.Element => (
  <Wrapper {...(size && { size })} {...(className && { className })}>
    <CheckboxStyled
      id={id}
      type='checkbox'
      data-testid='test-checkbox'
      checked={checked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
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
