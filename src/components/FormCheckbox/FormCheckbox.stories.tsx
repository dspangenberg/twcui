import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormCheckbox } from './index'

const meta = {
  title: 'Components/FormCheckbox',
  component: FormCheckbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    id: 'mails1'
  },
  argTypes: {}
} satisfies Meta<typeof FormCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: 'E-Mails erhalten',
    id: 'mails3'
  },
  render: args => {
    const [value, setValue] = useState(false)

    return (
      <div>
        <FormCheckbox
          {...args}
          checked={value}
          onCheckedChange={checked => setValue(checked === true)}
        />
      </div>
    )
  }
}

export const Indeterminate: Story = {
  args: {
    label: 'E-Mails erhalten',
    id: 'mails2'
  },
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>('indeterminate')

    return (
      <div>
        <FormCheckbox {...args} checked={value} onCheckedChange={checked => setValue(checked)} />
      </div>
    )
  }
}
