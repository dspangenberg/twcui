import { Button as ShadcnButton } from '@/components/ui/button'
import { LoaderCircleIcon } from 'lucide-react'
import type * as React from 'react'

interface ComponentProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  loading?: boolean
  asChild?: boolean
  className?: string
}

export function Button({
  variant = 'default',
  size = 'default',
  type = 'button',
  loading = false,
  className = '',
  asChild = false,
  children,
  ...props
}: ComponentProps) {
  const disabled = loading || props.disabled

  return (
    <ShadcnButton
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      {...props}
    >
      {loading && <LoaderCircleIcon className="-ms-1 animate-spin" size={16} aria-hidden="true" />}
      {children}
    </ShadcnButton>
  )
}
