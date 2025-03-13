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

export const Size: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/166466?v=4',
    className: 'size-12'
  }
}

export const WithoutImage: Story = {
  args: {
    initials: 'DS',
    fullname: 'Danny Spangenberg'
  }
}
