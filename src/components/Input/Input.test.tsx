import { useState } from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Input } from '.'
import { MifuxUIProvider } from '../../theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'

function DefaultInput() {
  const [testValue, setTestValue] = useState('123')

  const handleChange = (ev: any) => {
    setTestValue(ev.target.value)
  }

  return (
    <MifuxUIProvider>
      <Input value={testValue} onChange={handleChange} />
    </MifuxUIProvider>
  )
}

const setup = () => {
  const utils = render(<DefaultInput />)
  const input = utils.getByDisplayValue('123') as HTMLInputElement
  return {
    input,
    ...utils,
  }
}

test('renders a input with value', async () => {
  const { input } = setup()

  // value check before start of fireEvent
  expect(screen.getByDisplayValue('123')).toBeInTheDocument()

  fireEvent.change(input, { target: { value: '23' } })
  // value check after start of fireEvent
  expect(screen.getByDisplayValue('23')).toBeInTheDocument()
})
