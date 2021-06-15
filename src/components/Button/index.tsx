import { ButtonStyled, ButtonProps, IconWrapper } from './styled'
import { useTheme } from '../../theme'

export const Button = ({
  children,
  variant = 'primary',
  onClick = () => null,
  icon,
  size = 'large',
  className,
  disabled,
}: ButtonProps): JSX.Element => {
  const theme = useTheme()
  return (
    <ButtonStyled
      type='button'
      size={size}
      onClick={onClick}
      disabled={!!disabled}
      variant={variant}
      className={className || ''}
      dataIcon={!!icon}
      dataIconPos={icon?.position}
    >
      {icon ? (
        <IconWrapper dataIconPos={icon?.position}>
          {{
            ...(icon.item as object),
            props: { color: `${theme.buttons.colors[`${variant}Color`]}` },
          }}
        </IconWrapper>
      ) : null}
      {children || null}
    </ButtonStyled>
  )
}
