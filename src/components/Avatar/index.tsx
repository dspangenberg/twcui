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
  src?: string | null
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Avatar({
  fullname = '',
  initials = '',
  src = null,
  className = '',
  size = 'md'
}: AvatarProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('')

  const avatarSizeClass = {
    sm: 'size-7',
    md: 'size-8',
    lg: 'size-10'
  }[size]

  const fallBackFontSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'size-lg'
  }[size]

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

  // @ts-ignore
  return (
    <div className="border rounded-full border-border" data-testid="avatar-container">
      <ShadcnAvatar
        className={cn('rounded-full border-transparent border-2', avatarSizeClass, className)}
        data-testid="avatar"
      >
        <ShadcnAvatarImage src={src ?? undefined} alt={fullname} />
        <ShadcnAvatarFallback
          style={{ backgroundColor, color: textColor }}
          className={cn('rounded-full', fallBackFontSize)}
        >
          {initials}
        </ShadcnAvatarFallback>
      </ShadcnAvatar>
    </div>
  )
}
