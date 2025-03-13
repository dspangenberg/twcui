import { describe, expect, it } from 'vitest'
import { getIdealTextColor } from './colorUtils'

describe('getIdealTextColor', () => {
  it('returns black text for light backgrounds', () => {
    expect(getIdealTextColor('#FFFFFF')).toBe('#000000')
    expect(getIdealTextColor('#BAD80A')).toBe('#000000')
  })

  it('returns white text for dark backgrounds', () => {
    expect(getIdealTextColor('#000000')).toBe('#FFFFFF')
    expect(getIdealTextColor('#5C2D91')).toBe('#FFFFFF')
  })
})
