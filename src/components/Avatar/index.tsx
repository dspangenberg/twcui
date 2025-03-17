import {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
  AvatarImage as ShadcnAvatarImage
} from '@/components/ui/shadcn/avatar.tsx'
import { getIdealTextColor } from '@/lib/colorUtils'
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

  return (
    <div className="border rounded-full border-border" data-testid="avatar-container">
      <ShadcnAvatar
        className={cn('size-9 rounded-full border-transparent border-2', className)}
        data-testid="avatar"
      >
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
