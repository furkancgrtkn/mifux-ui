import { ButtonStyled, ButtonProps, IconWrapper, ButtonText } from './styled'
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
  borderless,
  iconSpacing,
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
      borderless={borderless}
      {...props}
    >
      {icon ? (
        <IconWrapper iconSpacing={iconSpacing} dataIconPos={icon?.position}>
          {{
            ...(icon.item as object),
            props: {
              ...(icon.item?.props as object),
              color: `${theme.buttons.colors[`${variant}Color`]}`,
            },
          }}
        </IconWrapper>
      ) : null}
      <ButtonText className='mifuxButtonText' size={size} letterSpacing={letterSpacing}>
        {children}
      </ButtonText>
    </ButtonStyled>
  )
}
