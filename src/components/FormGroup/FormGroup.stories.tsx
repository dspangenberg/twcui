import type { Meta, StoryObj } from '@storybook/react'
import { FormGroup } from './index'

const meta = {
  title: 'Components/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FormGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Form Group',
    fullWidth: true,
    children: (
      <>
        <div className="col-span-12">1</div>
        <div className="col-span-12">2</div>
      </>
    )
  }
}
