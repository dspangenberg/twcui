import React from 'react'
import { render, screen } from '@testing-library/react'
import { TwicewareSolution } from './index'
import { describe, it, expect } from 'vitest'

describe('TwicewareSolution', () => {
  it('renders with default props', () => {
    render(<TwicewareSolution appWebsite="" />)
    expect(screen.getByText('App')).toBeInTheDocument()
    expect(screen.getByText('is a')).toBeInTheDocument()
    expect(screen.getByText('twiceware solution')).toBeInTheDocument()
    expect(screen.getByText(/Copyright © \d{4}/)).toBeInTheDocument()
  })

  it('renders with custom app name and website', () => {
    render(<TwicewareSolution appName="Custom App" appWebsite="https://example.com" />)
    const appLink = screen.getByRole('link', { name: 'Custom App' })
    expect(appLink).toBeInTheDocument()
    expect(appLink).toHaveAttribute('href', 'https://example.com')
  })

  it('renders app name as text when no website is provided', () => {
    render(<TwicewareSolution appName="No Website App" appWebsite="" />)
    expect(screen.getByText('No Website App')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'No Website App' })).not.toBeInTheDocument()
  })

  it('hides copyright when hideCopyright is true', () => {
    render(<TwicewareSolution appWebsite="" hideCopyright />)
    expect(screen.queryByText(/Copyright © \d{4}/)).not.toBeInTheDocument()
  })

  it('displays correct copyright year range', () => {
    const pastYear = new Date().getFullYear() - 2
    render(<TwicewareSolution appWebsite="" copyrightYear={pastYear} />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`Copyright © ${pastYear}-${currentYear}`)).toBeInTheDocument()
  })

  it('renders Logo component', () => {
    render(<TwicewareSolution appWebsite="" />)
    expect(screen.getByTitle('twiceware-Logo')).toBeInTheDocument()
  })

  it('has correct link to twiceware website', () => {
    render(<TwicewareSolution appWebsite="" />)
    const twicewareLink = screen.getByRole('link', { name: 'twiceware solution' })
    expect(twicewareLink).toHaveAttribute('href', 'https://twiceware.de')
    expect(twicewareLink).toHaveAttribute('target', '_blank')
    expect(twicewareLink).toHaveAttribute('rel', 'noreferrer')
  })
})
