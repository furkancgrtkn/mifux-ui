import { ButtonStyled, ButtonProps, IconWrapper } from './styled'
import { useTheme } from '../../theme'

export const Button = ({
  children,
  variant = 'primary',
  icon,
  size = 'large',
  className,
  disabled,
  block,
  width,
  borderRadius,
  letterSpacing,
  disabledOpacity,
  onClick = () => null,
  props,
}: ButtonProps): JSX.Element => {
  const theme = useTheme()
  return (
    <ButtonStyled
      type='button'
      size={size}
      block={!!block}
      disabled={!!disabled}
      variant={variant}
      className={className || ''}
      dataIcon={!!icon}
      width={width}
      dataIconPos={icon?.position}
      disabledOpacity={disabledOpacity}
      onClick={onClick}
      borderRadius={borderRadius}
      letterSpacing={letterSpacing}
      {...props}
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
