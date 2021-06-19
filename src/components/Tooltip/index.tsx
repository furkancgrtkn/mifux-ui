import { TooltipStyled, TooltipProps } from './styled'
import { useTheme } from '../../theme'

export const Tooltip = ({ children, className }: TooltipProps): JSX.Element => {
  const theme = useTheme()
  return <TooltipStyled className={className || ''}>{children}</TooltipStyled>
}
