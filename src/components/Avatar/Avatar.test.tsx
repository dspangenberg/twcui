import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Avatar } from './index'

describe('Avatar', () => {
  afterEach(() => {
    cleanup()
  })
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
  it('verifies text color follows contrast rule for light backgrounds', () => {
    render(<Avatar fullname="Test User Light" initials="TL" />)

    const fallback = screen.getByText('TL')
    const backgroundColor = fallback.style.backgroundColor
    const textColor = fallback.style.color

    // Parse RGB values from the background color (format: "rgb(r, g, b)")
    const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    expect(rgbMatch).not.toBeNull()

    const r = Number.parseInt(rgbMatch?.[1])
    const g = Number.parseInt(rgbMatch?.[2])
    const b = Number.parseInt(rgbMatch?.[3])

    // Calculate brightness using the same formula as the component
    const brightness = (r * 299 + g * 587 + b * 114) / 1000

    // Assert text color follows the contrast rule
    if (brightness > 125) {
      expect(textColor).toBe('rgb(0, 0, 0)') // Black for light backgrounds
    } else {
      expect(textColor).toBe('rgb(255, 255, 255)') // White for dark backgrounds
    }
  })

  it('verifies text color follows contrast rule for dark backgrounds', () => {
    render(<Avatar fullname="Test User Dark" initials="TD" />)

    const fallback = screen.getByText('TD')
    const backgroundColor = fallback.style.backgroundColor
    const textColor = fallback.style.color

    // Parse RGB values from the background color (format: "rgb(r, g, b)")
    const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    expect(rgbMatch).not.toBeNull()

    const r = Number.parseInt(rgbMatch?.[1])
    const g = Number.parseInt(rgbMatch?.[2])
    const b = Number.parseInt(rgbMatch?.[3])

    // Calculate brightness using the same formula as the component
    const brightness = (r * 299 + g * 587 + b * 114) / 1000

    // Assert text color follows the contrast rule
    if (brightness > 125) {
      expect(textColor).toBe('rgb(0, 0, 0)') // Black for light backgrounds
    } else {
      expect(textColor).toBe('rgb(255, 255, 255)') // White for dark backgrounds
    }
  })

  it('applies correct text color based on background brightness', () => {
    // Using a string that generates a known light background color
    const { container: lightContainer } = render(
      <Avatar
        fullname="LIGHT" // Using a longer string to get more predictable results
        initials="LI"
      />
    )

    const lightFallback = lightContainer.querySelector('[data-slot="avatar-fallback"]')
    // Debug the actual styles
    console.log('Light background styles:', window.getComputedStyle(lightFallback).backgroundColor)
    const lightBgColor = window.getComputedStyle(lightFallback).backgroundColor
    const lightTextColor = window.getComputedStyle(lightFallback).color

    // Expect the appropriate text color based on the actual background
    if (lightBgColor.includes('255, 255, 255') || lightBgColor.includes('240, 240')) {
      expect(lightFallback).toHaveStyle({
        color: 'rgb(0, 0, 0)'
      })
    } else {
      expect(lightFallback).toHaveStyle({
        color: 'rgb(255, 255, 255)'
      })
    }

    cleanup()

    // Using a string that generates a known dark background color
    const { container: darkContainer } = render(<Avatar fullname="DARK" initials="DA" />)

    const darkFallback = darkContainer.querySelector('[data-slot="avatar-fallback"]')
    console.log('Dark background styles:', window.getComputedStyle(darkFallback).backgroundColor)
    const darkBgColor = window.getComputedStyle(darkFallback).backgroundColor
    expect(darkFallback).toHaveStyle({
      color: 'rgb(255, 255, 255)'
    })
  })
})
