import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FormCheckbox } from './index'

describe('FormCheckbox', () => {
  it('renders with label', () => {
    render(<FormCheckbox id="test-checkbox" label="Test Checkbox" />)
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders without label when not provided', () => {
    render(<FormCheckbox id="test-checkbox" />)
    expect(screen.queryByRole('label')).not.toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<FormCheckbox id="test-checkbox" className="custom-class" />)
    expect(screen.getByRole('checkbox')).toHaveClass('custom-class')
  })

  it('is checked when checked prop is true', () => {
    render(<FormCheckbox id="test-checkbox" checked={true} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('is not checked when checked prop is false', () => {
    render(<FormCheckbox id="test-checkbox" checked={false} />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('calls onCheckedChange when clicked', () => {
    const onCheckedChange = vi.fn()
    render(<FormCheckbox id="test-checkbox" onCheckedChange={onCheckedChange} />)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('is disabled when disabled prop is true', () => {
    render(<FormCheckbox id="test-checkbox" disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('associates label with checkbox using htmlFor', () => {
    render(<FormCheckbox id="test-checkbox" label="Test Checkbox" />)
    const checkbox = screen.getByRole('checkbox')
    const label = screen.getByText('Test Checkbox')
    expect(label).toHaveAttribute('for', 'test-checkbox')
    expect(checkbox).toHaveAttribute('id', 'test-checkbox')
  })

  it('renders with default checked state', () => {
    render(<FormCheckbox id="test-checkbox" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('applies rounded-sm class to checkbox', () => {
    render(<FormCheckbox id="test-checkbox" />)
    expect(screen.getByRole('checkbox')).toHaveClass('rounded-sm')
  })
  it('renders in indeterminate state', () => {
    render(
      <FormCheckbox
        label="Indeterminate Checkbox"
        id="indeterminate-checkbox"
        checked="indeterminate"
      />
    )

    const checkbox = screen.getByRole('checkbox', { name: 'Indeterminate Checkbox' })
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate')

    // Check if the indeterminate SVG is rendered
    const indeterminateSvg = screen.getByTitle('Indeterminate')
    expect(indeterminateSvg).toBeInTheDocument()
  })
})
