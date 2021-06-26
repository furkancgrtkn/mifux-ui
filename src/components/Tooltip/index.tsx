import { useEffect, useRef, useState } from 'react'
import { TooltipStyled, TooltipWrapper, TooltipProps, ChildWrapper } from './styled'

export const Tooltip = ({
  children,
  className,
  color,
  background,
  fontSize,
  fontWeight,
  boxShadow,
  borderRadius,
  padding,
  position = 'top',
  label = 'Tooltip',
}: TooltipProps): JSX.Element => {
  const childRef = useRef<HTMLDivElement>(null)
  const [positionState, setPositionState] = useState<number | undefined>()
  const [positionXState, setPositionXState] = useState<number | undefined>()
  useEffect(() => {
    setPositionState(childRef.current?.clientHeight)
    setPositionXState(childRef.current?.clientWidth)
  }, [childRef])
  return (
    <TooltipWrapper position={position} className={className || ''}>
      {positionState && position && label && (
        <TooltipStyled
          color={color}
          background={background}
          fontSize={fontSize}
          fontWeight={fontWeight}
          boxShadow={boxShadow}
          borderRadius={borderRadius}
          padding={padding}
          dataPosition={positionState}
          dataPositionX={positionXState}
          position={position}
        >
          {label}
        </TooltipStyled>
      )}
      <ChildWrapper ref={childRef}>{children}</ChildWrapper>
    </TooltipWrapper>
  )
}
