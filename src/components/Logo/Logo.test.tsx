import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Logo } from './index'

describe('Logo', () => {
  it('renders without crashing', () => {
    render(<Logo />)
    const logoElement = screen.getByTitle('twiceware-Logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const customClass = 'size-20'
    render(<Logo className={customClass} />)
    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toHaveClass(customClass)
  })

  it('has correct viewBox', () => {
    render(<Logo />)
    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toHaveAttribute('viewBox', '0 0 184 180')
  })

  it('has correct title', () => {
    render(<Logo />)
    const titleElement = screen.getByText('twiceware-Logo')
    expect(titleElement).toBeInTheDocument()
  })
})
