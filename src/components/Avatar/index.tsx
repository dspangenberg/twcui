import {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
  AvatarImage as ShadcnAvatarImage
} from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import type * as AvatarPrimitive from '@radix-ui/react-avatar'
import type * as React from 'react'
import { useEffect, useState } from 'react'

const colors = [
  '#00bcf2',
  '#0078d4',
  '#002050',
  '#008272',
  '#bad80a',
  '#004b1c',
  '#e3008c',
  '#b4a0ff',
  '#5c2d91',
  '#000000',
  '#d83b01',
  '#e81123',
  '#a80000',
  '#e81123',
  '#5c005c',
  '#b4a0ff',
  '#00188f'
]

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  fullname?: string
  initials?: string
  src?: string
  className?: string
}

export function Avatar({ fullname = '', initials = '', src = '', className = '' }: AvatarProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('')

  useEffect(() => {
    if (fullname) {
      // Generate color based on fullname
      const colorIndex =
        fullname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
      const bgColor = colors[colorIndex]
      setBackgroundColor(bgColor)
      setTextColor(getIdealTextColor(bgColor))
    }
  }, [fullname])

  const getIdealTextColor = (bgColor: string): string => {
    const hex = bgColor.replace('#', '')
    const r = Number.parseInt(hex.slice(0, 2), 16)
    const g = Number.parseInt(hex.slice(2, 4), 16)
    const b = Number.parseInt(hex.slice(4, 6), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 125 ? '#000000' : '#FFFFFF'
  }

  return (
    <div className="border rounded-full border-border">
      <ShadcnAvatar className={cn('size-9 rounded-full border-transparent border-2', className)}>
        <ShadcnAvatarImage src={src} alt={fullname} />
        <ShadcnAvatarFallback
          style={{ backgroundColor, color: textColor }}
          className="rounded-full"
        >
          {initials}
        </ShadcnAvatarFallback>
      </ShadcnAvatar>
    </div>
  )
}
