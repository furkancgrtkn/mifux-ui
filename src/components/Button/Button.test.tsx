import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from '.'
import { MifuxUIProvider } from '../../theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Button', () => {
  test('renders a default button with text', async () => {
    render(
      <MifuxUIProvider>
        <Button variant='primary' className='test-btn'>
          Click me
        </Button>
      </MifuxUIProvider>
    )

    expect(screen.getByText('Click me')).toBeInTheDocument()
    // const MyHeaderRoots = document.getElementsByClassName('test-btn')
    // const style = window.getComputedStyle(MyHeaderRoots[0])
    // expect(style.color).toBe('rgb(255, 36, 27)')
    // expect(MyHeaderRoots[0]).toHaveStyleRule('padding', '10px')
  })
  test('handles onClick', async () => {
    const mockOnClick = jest.fn()
    render(
      <MifuxUIProvider>
        <Button variant='primary' onClick={mockOnClick}>
          Click me
        </Button>
      </MifuxUIProvider>
    )
    fireEvent.click(screen.getByText('Click me'))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
