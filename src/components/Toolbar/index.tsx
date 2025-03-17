import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'
import type React from 'react'

export interface ToolbarProps {
  className?: string
  children?: React.ReactNode
}
import {
  Toolbar as YkToolbar,
  ToolbarButton as YkToolbarButton
} from '@/components/ui/yanickrochon/toolbar.tsx'

export const Toolbar: React.FC<ToolbarProps> = ({ className = '', children }) => {
  return (
    <YkToolbar className={cn('bg-sidebar justify-end space-x-2 p-1', className)}>
      {children}
    </YkToolbar>
  )
}

export interface ToolbarButtonProps {
  className?: string
  iconClassName?: string
  variant?: 'default' | 'secondary'
  title?: string
  icon: Global.IconSvgElement
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  className = '',
  title = '',
  variant = 'secondary',
  icon
}) => {
  const buttonVariant = variant === 'default' ? 'outline' : 'ghost'
  return (
    <YkToolbarButton asChild>
      <Button
        variant={buttonVariant}
        title={title}
        size="icon"
        icon={icon}
        iconClassName="text-primary"
        className={cn(
          'items-center gap-2 px-2.5',
          variant === 'default' ? 'w-auto' : '',
          className
        )}
      />
    </YkToolbarButton>
  )
}
