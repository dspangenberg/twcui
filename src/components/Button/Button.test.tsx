import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './index'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/80 h-9 px-4 py-2 has-[>svg]:px-3"
    )
  })

  it('renders with custom className', () => {
    render(<Button className="custom-class">Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toHaveClass('custom-class')
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="destructive">Destructive</Button>)
    const button = screen.getByRole('button', { name: 'Destructive' })
    expect(button).toHaveClass(
      'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60'
    )
  })

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole('button', { name: 'Large Button' })
    expect(button).toHaveClass('h-10 rounded-md px-6 has-[>svg]:px-4')
  })

  it('disables the button when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button', { name: 'Disabled Button' })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:pointer-events-none disabled:opacity-50')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button', { name: 'Clickable' })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick handler when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Disabled' })
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders with children content', () => {
    render(
      <Button>
        <span>Icon</span>
        <span>Button Text</span>
      </Button>
    )
    expect(screen.getByText('Icon')).toBeInTheDocument()
    expect(screen.getByText('Button Text')).toBeInTheDocument()
  })

  it('displays loading icon when loading prop is true', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button', { name: 'Loading Button' })
    const loaderIcon = button.querySelector('svg.animate-spin')
    expect(loaderIcon).toBeInTheDocument()
    expect(loaderIcon).toHaveClass('animate-spin')
    expect(loaderIcon).toHaveAttribute('aria-hidden', 'true')
  })

  it('disables the button when loading prop is true', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button', { name: 'Loading Button' })
    expect(button).toBeDisabled()
  })

  it('applies correct button type attribute', () => {
    render(<Button type="submit">Submit Button</Button>)
    const submitButton = screen.getByRole('button', { name: 'Submit Button' })
    expect(submitButton).toHaveAttribute('type', 'submit')

    render(<Button type="reset">Reset Button</Button>)
    const resetButton = screen.getByRole('button', { name: 'Reset Button' })
    expect(resetButton).toHaveAttribute('type', 'reset')

    render(<Button>Default Button</Button>)
    const defaultButton = screen.getByRole('button', { name: 'Default Button' })
    expect(defaultButton).toHaveAttribute('type', 'button')
  })

  it('remains disabled when both loading and disabled props are true', () => {
    render(
      <Button loading disabled>
        Loading Disabled Button
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Loading Disabled Button' })
    expect(button).toBeDisabled()
  })

  it('renders loading icon before children content', () => {
    render(<Button loading>Loading Text</Button>)
    const button = screen.getByRole('button', { name: 'Loading Text' })
    const buttonHTML = button.innerHTML

    // Check that the SVG (loader icon) appears before the text content
    const svgIndex = buttonHTML.indexOf('<svg')
    const textIndex = buttonHTML.indexOf('Loading Text')
    expect(svgIndex).toBeLessThan(textIndex)
  })
})
