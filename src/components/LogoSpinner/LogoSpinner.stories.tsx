import type { Meta, StoryObj } from '@storybook/react'
import { LogoSpinner } from './index'

const meta = {
  title: 'Components/LogoSpinner',
  component: LogoSpinner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LogoSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
