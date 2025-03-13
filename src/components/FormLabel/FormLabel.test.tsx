import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormLabel } from '.'

describe('FormLabel', () => {
  it('renders the label text', () => {
    render(<FormLabel>Test Label</FormLabel>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })
  it('applies default CSS classes', () => {
    render(<FormLabel>Test Label</FormLabel>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-base')
    expect(label).toHaveClass('leading-none')
    expect(label).toHaveClass('peer-disabled:cursor-not-allowed')
    expect(label).toHaveClass('peer-disabled:opacity-50')
  })

  it('combines default and custom CSS classes', () => {
    render(<FormLabel className="custom-class">Test Label</FormLabel>)
    const label = screen.getByText('Test Label')

    expect(label).toHaveClass('custom-class')
  })
  it('renders with a "for" attribute when htmlFor prop is provided', () => {
    render(<FormLabel htmlFor="test-input">Test Label</FormLabel>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('renders without a "for" attribute when htmlFor prop is not provided', () => {
    render(<FormLabel>Test Label</FormLabel>)
    const label = screen.getByText('Test Label')
    expect(label).not.toHaveAttribute('for')
  })

  it('renders with additional props', () => {
    render(<FormLabel data-testid="test-label">Test Label</FormLabel>)
    expect(screen.getByTestId('test-label')).toBeInTheDocument()
  })

  it('renders as a label element by default', () => {
    render(<FormLabel>Test Label</FormLabel>)
    expect(screen.getByText('Test Label').tagName).toBe('LABEL')
  })

  it('renders as a different element when asChild is true', () => {
    render(
      <FormLabel asChild>
        <span>Test Label</span>
      </FormLabel>
    )
    expect(screen.getByText('Test Label').tagName).toBe('SPAN')
  })

  it('applies custom className when provided', () => {
    render(<FormLabel className="custom-class">Label</FormLabel>)
    const label = screen.getByText('Label')
    expect(label).toHaveClass('custom-class')
  })
})
