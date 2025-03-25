/*  Original author:
    https://github.com/yanickrochon

    Source:
    https://github.com/shadcn-ui/ui/issues/2633#issuecomment-2704448843

    Dependencies:
    @radix-ui/react-toolbar

    :root {
      --toolbar oklch(0.984 0.003 247.858)
    }

    .dark
    {
      --toolbar: oklch(0.208 0.042 265.755)
    }

    @theme inline {
      --color-toolbar: var(--toolbar);
    }
 */

'use client'

import { buttonVariants } from '@/components/ui/shadcn/button.tsx'
import { toggleVariants } from '@/components/ui/shadcn/toggle.tsx'
import { cn } from '@/lib/utils.ts'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'

const ToolbarToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'sm',
  variant: 'default'
})

function Toolbar({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) {
  return (
    <ToolbarPrimitive.Root
      className={cn(
        'bg-toolbar flex items-center space-x-1 rounded-md border p-1 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </ToolbarPrimitive.Root>
  )
}

Toolbar.displayName = ToolbarPrimitive.Root.displayName

function ToolbarButton(props: React.ComponentProps<typeof ToolbarPrimitive.Button>) {
  return <ToolbarPrimitive.Button {...props} />
}

ToolbarButton.displayName = ToolbarPrimitive.Button.displayName

function ToolbarToggleGroup({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToggleGroup> &
  React.ComponentProps<typeof ToolbarToggleGroupContext.Provider>['value']) {
  return (
    <ToolbarPrimitive.ToggleGroup
      className={cn('flex items-center justify-center gap-1', className)}
      {...props}
    >
      <ToolbarToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToolbarToggleGroupContext.Provider>
    </ToolbarPrimitive.ToggleGroup>
  )
}

ToolbarToggleGroup.displayName = ToolbarPrimitive.ToggleGroup.displayName

function ToolbarToggleItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToggleItem>) {
  const context = React.useContext(ToolbarToggleGroupContext)

  return (
    <ToolbarPrimitive.ToggleItem
      className={cn(
        toggleVariants({
          variant: context.variant,
          size: context.size
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToolbarPrimitive.ToggleItem>
  )
}

ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName

function ToolbarSeparator({
  className,
  orientation = 'vertical',
  decorative = true,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-[1px] w-7' : 'h-7 w-[1px]',
        className
      )}
      {...props}
    />
  )
}

ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName

function ToolbarLink({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToolbarLink>) {
  return (
    <ToolbarPrimitive.Link
      className={cn(buttonVariants({ variant: 'link' }), className)}
      {...props}
    />
  )
}

ToolbarLink.displayName = ToolbarPrimitive.Link.displayName

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem
}
