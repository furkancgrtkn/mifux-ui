import { render, fireEvent, screen } from '@testing-library/react'
import { Radio } from '.'
import { MifuxUIProvider } from '../../theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'

function DefaultRadio() {
  return (
    <MifuxUIProvider>
      <Radio id='1' name='test' checked={false} props={{ 'data-testid': 'test-radio1' }} />
      <Radio id='2' name='test' checked={false} props={{ 'data-testid': 'test-radio2' }} />
      <Radio id='3' name='test' checked={false} props={{ 'data-testid': 'test-radio4' }} />
    </MifuxUIProvider>
  )
}

const setup = () => {
  render(<DefaultRadio />)
  const radio1 = screen.getByTestId('test-radio1') as HTMLInputElement
  const radio2 = screen.getByTestId('test-radio2') as HTMLInputElement
  const radio3 = screen.getByTestId('test-radio4') as HTMLInputElement
  return {
    radio1,
    radio2,
    radio3,
  }
}

test('renders a Radio with checked', async () => {
  const { radio1, radio2, radio3 } = setup()

  expect(radio1.checked).toEqual(false)
  expect(radio2.checked).toEqual(false)
  expect(radio3.checked).toEqual(false)
  fireEvent.click(radio1)
  expect(radio1.checked).toEqual(true)
  expect(radio2.checked).toEqual(false)
  expect(radio3.checked).toEqual(false)
  fireEvent.click(radio2)
  expect(radio1.checked).toEqual(false)
  expect(radio2.checked).toEqual(true)
  expect(radio3.checked).toEqual(false)
  fireEvent.click(radio3)
  expect(radio1.checked).toEqual(false)
  expect(radio2.checked).toEqual(false)
  expect(radio3.checked).toEqual(true)
})
