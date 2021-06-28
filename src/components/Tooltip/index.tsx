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
  borderless = false,
}: TooltipProps): JSX.Element => {
  const childRef = useRef<HTMLDivElement>(null)
  const [positionState, setPositionState] = useState<number | undefined>()
  const [positionXState, setPositionXState] = useState<number | undefined>()
  useEffect(() => {
    setPositionState(childRef.current?.clientHeight)
    setPositionXState(childRef.current?.clientWidth)
  }, [childRef])
  return (
    <TooltipWrapper
      data-testid='test-tooltip-wrapper'
      position={position}
      className={className || ''}
    >
      {position && label && (
        <TooltipStyled
          data-testid='test-tooltip'
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
          borderless={borderless}
        >
          {label}
        </TooltipStyled>
      )}
      <ChildWrapper ref={childRef}>{children}</ChildWrapper>
    </TooltipWrapper>
  )
}
