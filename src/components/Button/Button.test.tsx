import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'
import { MifuxUIProvider } from '../../theme'

describe('Button', () => {
	test('renders a default button with text', async () => {
		render(
			<MifuxUIProvider>
				<Button>Click me</Button>
			</MifuxUIProvider>
		)

		expect(screen.getByText('Click me')).toBeInTheDocument()
	})
	test('handles onClick', async () => {
		const mockOnClick = jest.fn()
		render(
			<MifuxUIProvider>
				<Button onClick={mockOnClick}>Click me</Button>
			</MifuxUIProvider>
		)
		fireEvent.click(screen.getByText('Click me'))

		expect(mockOnClick).toHaveBeenCalledTimes(1)
	})
})
