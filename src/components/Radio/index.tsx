import { Wrapper, RadioStyled, RadioLabel, RadioProps } from './styled'

export const Radio = ({
  defaultChecked,
  className,
  props,
  size = 18,
  borderWidth = 1,
  id,
  name,
  onChange = () => null,
}: RadioProps): JSX.Element => (
  <Wrapper {...(size && { size })} {...(className && { className })}>
    <RadioStyled
      id={id}
      name={name}
      type='radio'
      defaultChecked={defaultChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
      }}
      {...(size && { size })}
      {...(borderWidth && { borderWidth })}
      {...props}
    />
    <RadioLabel {...(size && { size })} {...(borderWidth && { borderWidth })} htmlFor={id} />
  </Wrapper>
)
