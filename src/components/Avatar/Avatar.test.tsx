import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from './index'

describe('Avatar', () => {
  it('renders with image when src is provided', () => {
    render(<Avatar fullname="John Doe" initials="JD" src="/path/to/image.jpg" />)
    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
  })

  it('renders initials when no src is provided', () => {
    render(<Avatar fullname="John Doe" initials="JD" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('generates background color based on fullname', () => {
    render(<Avatar fullname="John Doe" initials="JD" />)
    const fallback = screen.getByText('JD')
    const backgroundColor = fallback.style.backgroundColor
    expect(backgroundColor).toBeTruthy()
    expect(backgroundColor).not.toBe('')
  })

  it('generates different colors for different names', () => {
    const { rerender } = render(<Avatar fullname="John Doe" initials="JD" />)
    const color1 = screen.getByText('JD').style.backgroundColor

    rerender(<Avatar fullname="Jane Smith" initials="JS" />)
    const color2 = screen.getByText('JS').style.backgroundColor

    expect(color1).not.toBe(color2)
  })

  it('applies custom className', () => {
    render(<Avatar fullname="John Doe" initials="JD" className="custom-class" />)
    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toHaveClass('custom-class')
  })

  it('renders with default props when no props are provided', () => {
    render(<Avatar />)
    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
  })

  it('generates text color based on background color', () => {
    render(<Avatar fullname="John Doe" initials="JD" />)
    const fallback = screen.getByText('JD')
    const color = fallback.style.color
    expect(color).toBeTruthy()
    expect(color).not.toBe('')
  })

  it('renders within a border container', () => {
    render(<Avatar fullname="John Doe" initials="JD" />)
    const container = screen.getByTestId('avatar-container')
    expect(container).toHaveClass('border', 'rounded-full', 'border-border')
  })

  it('renders with fallback when image fails to load', () => {
    render(<Avatar src="invalid-image-url" initials="JD" />)
    const fallback = screen.getByText('JD')
    expect(fallback).toBeInTheDocument()
  })
})
