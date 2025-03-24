import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormInput } from './index'

describe('FormInput', () => {
  it('renders input element', () => {
    render(<FormInput name="test" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<FormInput name="test" label="Test Label" />)
    expect(screen.getByText('Test Label:')).toBeInTheDocument()
  })

  it('does not render label when not provided', () => {
    render(<FormInput name="test" />)
    expect(screen.queryByText(/:/)).not.toBeInTheDocument()
  })

  it('renders help text when provided', () => {
    render(<FormInput name="test" help="This is help text" />)
    expect(screen.getByText('This is help text')).toBeInTheDocument()
  })

  it('does not render help text when not provided', () => {
    render(<FormInput name="test" />)
    expect(screen.queryByText('This is help text')).not.toBeInTheDocument()
  })

  it('sets aria-invalid attribute when error is provided', () => {
    render(<FormInput name="test" error="This is an error" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not set aria-invalid attribute when no error is provided', () => {
    render(<FormInput name="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
  })

  it('passes through additional props to the input element', () => {
    render(<FormInput name="test" placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('applies custom className to the input element', () => {
    render(<FormInput name="test" className="custom-class" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('sets the input type correctly', () => {
    render(<FormInput name="test" type="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
  })

  it('sets the required attribute on the label when required prop is true', () => {
    render(<FormInput name="test" label="Test Label" required />)
    expect(screen.getByText('Test Label:')).toHaveAttribute('data-required', 'true')
  })

  it('does not set the required attribute on the label when required prop is false', () => {
    render(<FormInput name="test" label="Test Label" required={false} />)
    expect(screen.getByText('Test Label:')).not.toHaveAttribute('data-required')
  })
})
