import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LogoSpinner } from './index'

describe('LogoSpinner', () => {
  it('renders without crashing', () => {
    render(<LogoSpinner />)
    const spinnerElement = screen.getByTestId('logo-spinner')
    expect(spinnerElement).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const customClass = 'custom-spinner-class'
    render(<LogoSpinner className={customClass} />)
    const spinnerElement = screen.getByTestId('logo-spinner-svg')
    expect(spinnerElement).toHaveClass(customClass)
  })

  it('contains the Logo component', () => {
    render(<LogoSpinner />)
    const logoElement = screen.getByTitle('twiceware-Logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('has correct animation classes', () => {
    render(<LogoSpinner />)
    const spinnerElement = screen.getByTestId('logo-spinner-svg')
    expect(spinnerElement).toHaveClass('animate-spin')
  })

  it('has correct size classes', () => {
    render(<LogoSpinner />)
    const spinnerElement = screen.getByTestId('logo-spinner-svg')
    expect(spinnerElement).toHaveClass('size-12')
  })
})
