import { ButtonStyled, ButtonProps } from './styled'

export const Button = ({
  children,
  variant = 'primary',
  onClick = () => null,
  bg = '#D1D5DB',
  color = '#1F2957',
  className,
}: ButtonProps): JSX.Element => (
  <ButtonStyled
    type='button'
    color={color}
    bg={bg}
    onClick={onClick}
    variant={variant}
    className={className || ''}
  >
    {children || null}
  </ButtonStyled>
)
