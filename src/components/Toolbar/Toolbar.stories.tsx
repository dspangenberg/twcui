import { NoteEditIcon } from '@hugeicons/core-free-icons'
import type { Meta, StoryObj } from '@storybook/react'
import { Toolbar, ToolbarButton } from './index'
const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  render: args => (
    <Toolbar className="w-md" {...args}>
      <ToolbarButton variant="default" icon={NoteEditIcon} title="Datensatz bearbeiten" />
      <ToolbarButton icon={NoteEditIcon} />
    </Toolbar>
  )
}
