import { useState } from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Checkbox } from '.'
import { MifuxUIProvider } from '../../theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'

function DefaultCheckbox() {
  const [testValue, setTestValue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestValue(e.target.checked)
  }

  return (
    <MifuxUIProvider>
      <Checkbox id='1' checked={testValue} onChange={handleChange} />
    </MifuxUIProvider>
  )
}

const setup = () => {
  render(<DefaultCheckbox />)
  const checkbox = screen.getByTestId('test-checkbox') as HTMLInputElement
  return {
    checkbox,
  }
}

test('renders a Checkbox with checked', async () => {
  const { checkbox } = setup()

  expect(checkbox.checked).toEqual(false)
  fireEvent.click(checkbox)
  expect(checkbox.checked).toEqual(true)
  fireEvent.click(checkbox)
  expect(checkbox.checked).toEqual(false)
})
