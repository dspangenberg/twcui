import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './index'

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const Size: Story = {
  args: {
    className: 'size-20'
  }
}

export const NotRounded: Story = {
  args: {
    className: 'size-10 rounded-none'
  }
}

export const RoundedFull: Story = {
  args: {
    className: 'size-10 rounded-full'
  }
}
