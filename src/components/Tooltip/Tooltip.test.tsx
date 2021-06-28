import { render, fireEvent } from '@testing-library/react'
import { Tooltip } from '.'
import { MifuxUIProvider } from '../../theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Tooltip', () => {
  test('renders a default Tooltip', async () => {
    const tooltip = render(
      <MifuxUIProvider>
        <Tooltip label='Tooltip Text Test' position='right' className='test-btn'>
          Tooltip
        </Tooltip>
      </MifuxUIProvider>
    )
    fireEvent.mouseOver(tooltip.getByTestId('test-tooltip-wrapper'))

    expect(await tooltip.findByText('Tooltip Text Test')).toBeInTheDocument()
  })
})
