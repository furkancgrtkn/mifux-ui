import { render } from '@testing-library/react'
import { Tooltip } from '.'
import { MifuxUIProvider } from '../../theme'
import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Button', () => {
  test('renders a default button with text', async () => {
    render(
      <MifuxUIProvider>
        <Tooltip className='test-btn'>Tooltip</Tooltip>
      </MifuxUIProvider>
    )
  })
})
