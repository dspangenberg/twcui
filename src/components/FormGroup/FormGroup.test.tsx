import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormGroup } from '.'

describe('FormGroup', () => {
  it('renders children correctly', () => {
    render(
      <FormGroup>
        <div>Child 1</div>
        <div>Child 2</div>
      </FormGroup>
    )
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(<FormGroup title="Test Title">Content</FormGroup>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('does not render title when not provided', () => {
    const { container } = render(<FormGroup>Content</FormGroup>)
    expect(container.querySelector('.titleClass')).not.toBeInTheDocument()
  })

  it('applies default classes correctly', () => {
    const { container } = render(<FormGroup>Content</FormGroup>)
    const groupDiv = container.firstChild as HTMLElement
    expect(groupDiv).toHaveClass('flex-1', 'border-stone-100', 'p-1')
  })

  it('applies grid classes when grid prop is true', () => {
    const { container } = render(<FormGroup grid>Content</FormGroup>)
    const contentDiv = container.querySelector('.grid-cols-24')
    expect(contentDiv).toBeInTheDocument()
  })

  it('does not apply grid classes when grid prop is false', () => {
    const { container } = render(<FormGroup grid={false}>Content</FormGroup>)
    const contentDiv = container.querySelector('.grid-cols-24')
    expect(contentDiv).not.toBeInTheDocument()
  })

  it('applies fullWidth class when fullWidth prop is true', () => {
    const { container } = render(<FormGroup fullWidth>Content</FormGroup>)
    const contentDiv = container.querySelector('.w-full')
    expect(contentDiv).toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    const { container } = render(<FormGroup className="custom-class">Content</FormGroup>)
    const groupDiv = container.firstChild as HTMLElement
    expect(groupDiv.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('applies border class when border prop is true', () => {
    const { container } = render(<FormGroup border>Content</FormGroup>)
    const contentDiv = container.querySelector('.border-stone-100')
    expect(contentDiv).toBeInTheDocument()
  })

  it('applies margin class when margin prop is true', () => {
    const { container } = render(<FormGroup margin>Content</FormGroup>)
    const contentDiv = container.querySelector('.mt-3')
    expect(contentDiv).toBeInTheDocument()
  })

  it('applies correct grid columns based on cols prop', () => {
    const { container } = render(<FormGroup cols={12}>Content</FormGroup>)
    const contentDiv = container.querySelector('.grid-cols-12')
    expect(contentDiv).toBeInTheDocument()
  })

  it('applies custom titleClass when provided', () => {
    render(<FormGroup title="Test Title" titleClass="custom-title-class">Content</FormGroup>)
    const titleElement = screen.getByText('Test Title')
    expect(titleElement).toHaveClass('custom-title-class')
  })
})