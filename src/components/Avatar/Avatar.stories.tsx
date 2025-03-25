import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './index'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const SizeDefault: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/166466?v=4'
  }
}

export const WithoutImage: Story = {
  args: {
    initials: 'GB',
    fullname: 'Gabriele Mustermann'
  }
}

export const WithoutImageSm: Story = {
  args: {
    initials: 'GB',
    fullname: 'Gabriele Mustermann',
    size: 'sm'
  }
}

export const WithoutImageLg: Story = {
  args: {
    initials: 'GB',
    fullname: 'Gabriele Mustermann',
    size: 'lg'
  }
}
