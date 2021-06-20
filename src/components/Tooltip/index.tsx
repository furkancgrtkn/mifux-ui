import { useEffect, useRef, useState } from 'react'
import { TooltipStyled, TooltipWrapper, TooltipProps, ChildWrapper } from './styled'

export const Tooltip = ({ children, className }: TooltipProps): JSX.Element => {
  const childRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<number | undefined>()
  useEffect(() => {
    setPosition(childRef.current?.clientHeight)
  }, [childRef])
  return (
    <TooltipWrapper className={className || ''}>
      {position && <TooltipStyled dataPosition={position}>Tool</TooltipStyled>}
      <ChildWrapper ref={childRef}>{children}</ChildWrapper>
    </TooltipWrapper>
  )
}
