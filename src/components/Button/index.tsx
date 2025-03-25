import { Button as ShadcnButton } from '@/components/ui/shadcn/button.tsx'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/shadcn/tooltip.tsx'
import { cn } from '@/lib/utils.ts'
import { HugeiconsIcon } from '@hugeicons/react'
import { LoaderCircleIcon } from 'lucide-react'
import type * as React from 'react'

interface ComponentProps extends React.ComponentProps<'button'> {
  children?: React.ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-xs'
  loading?: boolean
  asChild?: boolean
  className?: string
  title?: string
  tooltip?: string
  forceTitle?: boolean
  icon?: Global.IconSvgElement | null
  iconClassName?: string
}

export function Button({
  tooltip = '',
  forceTitle = false,
  title = '',
  size = 'default',
  ...props
}: ComponentProps) {
  if (!forceTitle && title && !tooltip && ['icon', 'icon-sm', 'icon-xs'].includes(size)) {
    tooltip = title
    title = ''
  }

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <BaseButton size={size} {...props} />
          </TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return <BaseButton size={size} title={title} {...props} />
}

export function BaseButton({
  variant = 'default',
  size = 'default',
  type = 'button',
  loading = false,
  className = '',
  iconClassName = '',
  title = '',
  icon = null,
  asChild = false,
  children,
  ...props
}: ComponentProps) {
  const disabled = loading || props.disabled

  const iconSizeClass =
    {
      default: 'size-5',
      sm: 'size-5',
      lg: 'size-5',
      icon: 'size-5',
      'icon-sm': 'size-4',
      'icon-xs': 'size-3'
    }[size] || 'size-5' // Provide a default value if size doesn't match

  return (
    <ShadcnButton
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      {...props}
    >
      {!loading && icon && (
        <HugeiconsIcon icon={icon} className={cn(iconSizeClass, iconClassName)} />
      )}
      {loading && <LoaderCircleIcon className="animate-spin" size={16} aria-hidden="true" />}
      {title || children}
    </ShadcnButton>
  )
}
