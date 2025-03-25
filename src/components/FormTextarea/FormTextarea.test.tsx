import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormTextarea } from './index'

describe('FormInput', () => {
  it('renders input element', () => {
    render(<FormTextarea name="test" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<FormTextarea name="test" label="Test Label" />)
    expect(screen.getByText('Test Label:')).toBeInTheDocument()
  })

  it('does not render label when not provided', () => {
    render(<FormTextarea name="test" />)
    expect(screen.queryByText(/:/)).not.toBeInTheDocument()
  })

  it('renders help text when provided', () => {
    render(<FormTextarea name="test" help="This is help text" />)
    expect(screen.getByText('This is help text')).toBeInTheDocument()
  })

  it('does not render help text when not provided', () => {
    render(<FormTextarea name="test" />)
    expect(screen.queryByText('This is help text')).not.toBeInTheDocument()
  })

  it('sets aria-invalid attribute when error is provided', () => {
    render(<FormTextarea name="test" error="This is an error" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not set aria-invalid attribute when no error is provided', () => {
    render(<FormTextarea name="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
  })

  it('passes through additional props to the input element', () => {
    render(<FormTextarea name="test" placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('applies custom className to the input element', () => {
    render(<FormTextarea name="test" className="custom-class" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('sets the rows attribute correctly', () => {
    render(<FormTextarea name="test" rows={4} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '4')
  })

  it('sets the required attribute on the label when required prop is true', () => {
    render(<FormTextarea name="test" label="Test Label" required />)
    expect(screen.getByText('Test Label:')).toHaveAttribute('data-required', 'true')
  })

  it('does not set the required attribute on the label when required prop is false', () => {
    render(<FormTextarea name="test" label="Test Label" required={false} />)
    expect(screen.getByText('Test Label:')).not.toHaveAttribute('data-required')
  })
})
