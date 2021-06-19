import { useState } from 'react'
import { CheckboxStyled, CheckboxLabel, CheckboxProps } from './styled'

export const Checkbox = ({ className }: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <CheckboxStyled
        id='checkbox'
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <CheckboxLabel htmlFor='checkbox' />
    </>
  )
}
