import type { Meta, StoryObj } from '@storybook/react'
import { FormLabel } from './index'

const meta = {
  title: 'Components/FormLabel',
  component: FormLabel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FormLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: 'E-Mail'
  }
}

export const Required: Story = {
  args: {
    value: 'E-Mail',
    required: true
  }
}
