import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
	test('renders a default button with text', async () => {
		render(<Button>Click me</Button>)

		expect(screen.getByText('Click me')).toBeInTheDocument()
	})
	test('renders a primary button', async () => {
		render(<Button primary>Click me</Button>)
	})
	test('renders a button with custom colors', async () => {
		render(
			<Button color='#1E40AF' backgroundColor='#A78BFA'>
				Click me
			</Button>
		)
	})
	test('handles onClick', async () => {
		const mockOnClick = jest.fn()
		render(<Button onClick={mockOnClick}>Click me</Button>)
		fireEvent.click(screen.getByText('Click me'))

		expect(mockOnClick).toHaveBeenCalledTimes(1)
	})
})
