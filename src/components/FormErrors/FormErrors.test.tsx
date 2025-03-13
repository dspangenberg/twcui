import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormErrors } from './index'

describe('FormErrors', () => {
  it('does not render when errors object is empty', () => {
    const { container } = render(<FormErrors errors={{}} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders with default title when errors are provided', () => {
    render(<FormErrors errors={{ field1: 'Error 1' }} />)
    expect(screen.getByText('Das hat leider nicht funktioniert.')).toBeInTheDocument()
  })

  it('renders with custom title when provided and errors exist', () => {
    const customTitle = 'Custom Error Title'
    render(<FormErrors errors={{ field1: 'Error 1' }} title={customTitle} />)
    expect(screen.getByText(customTitle)).toBeInTheDocument()
  })

  it('renders error messages when provided', () => {
    const errors = { field1: 'Error 1', field2: 'Error 2', field3: 'Error 3' }
    render(<FormErrors errors={errors} />)
    for (const error of Object.values(errors)) {
      expect(screen.getByText(error)).toBeInTheDocument()
    }
  })

  it('renders error list when errors are provided', () => {
    render(<FormErrors errors={{ field1: 'Error 1' }} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('applies correct CSS classes when errors are present', () => {
    render(<FormErrors errors={{ field1: 'Error' }} />)
    const container = screen.getByRole('alert')
    expect(container).toHaveClass('rounded-lg border border-red-500/50 px-4 py-3 text-red-600')
  })

  it('renders title with correct CSS classes when errors are present', () => {
    render(<FormErrors errors={{ field1: 'Error' }} />)
    const title = screen.getByText('Das hat leider nicht funktioniert.')
    expect(title).toHaveClass('text-base font-medium flex-1')
  })

  it('renders error list with correct CSS classes', () => {
    render(<FormErrors errors={{ field1: 'Error 1', field2: 'Error 2' }} />)
    const errorList = screen.getByRole('list')
    expect(errorList).toHaveClass(
      'list-inside list-disc text-sm opacity-80 pl-9 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md'
    )
  })

  it('renders error items correctly', () => {
    const errors = { field1: 'Error 1', field2: 'Error 2' }
    render(<FormErrors errors={errors} />)
    const errorItems = screen.getAllByRole('listitem')
    expect(errorItems).toHaveLength(Object.keys(errors).length)
    errorItems.forEach((item, index) => {
      expect(item).toHaveTextContent(Object.values(errors)[index])
    })
  })

  it('renders nothing when errors prop is undefined', () => {
    const { container } = render(<FormErrors errors={undefined} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders nothing when errors prop is null', () => {
    const { container } = render(<FormErrors errors={null as any} />)
    expect(container).toBeEmptyDOMElement()
  })
})
