import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon']
    },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Primary Button'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Primary Button'
  }
}

export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'default',
    loading: true,
    children: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button'
  }
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button'
  }
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button'
  }
}
