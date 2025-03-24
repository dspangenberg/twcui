import { Button } from '@/components/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/shadcn/dropdown-menu.tsx'
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
    <YkToolbar className={cn('bg-sidebar justify-end gap-1 p-1', className)}>{children}</YkToolbar>
  )
}

export interface ToolbarButtonProps {
  className?: string
  iconClassName?: string
  variant?: 'default' | 'secondary'
  title?: string
  forceTitle?: boolean
  icon: Global.IconSvgElement
  disabled?: boolean
  onClick?: () => void
}

export interface ToolbarDropDownButtonProps extends ToolbarButtonProps {
  children: React.ReactNode
  side?: 'bottom' | 'left' | 'right' | 'top'
  align?: 'start' | 'end' | 'center'
  sideOffset?: number
  alignOffset?: number
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  className = '',
  title = '',
  variant = 'secondary',
  icon,
  disabled = false,
  onClick
}) => {
  const buttonVariant = variant === 'default' ? 'outline' : 'ghost'
  const forceTitle = variant === 'default'

  return (
    <YkToolbarButton asChild onClick={onClick} disabled={disabled}>
      <Button
        variant={buttonVariant}
        title={title}
        size="icon"
        icon={icon}
        forceTitle={forceTitle}
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

export const ToolbarDropDownButton: React.FC<ToolbarDropDownButtonProps> = ({
  side = 'bottom',
  align = 'center',
  sideOffset = 0,
  alignOffset = 0,
  variant = 'default',
  className = '',
  children = '',
  title,
  ...props
}) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <YkToolbarButton asChild>
            <Button variant="ghost" tooltip="" size="icon" icon={props.icon} />
          </YkToolbarButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={className}
        >
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
