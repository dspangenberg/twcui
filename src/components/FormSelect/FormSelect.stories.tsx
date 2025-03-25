import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormSelect, type Option } from './index'

const meta = {
  title: 'Components/FormSelect',
  component: FormSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FormSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [value, setValue] = useState<string>('')

    const categories: Option[] = [
      { value: '1', label: 'Deutschland' },
      { value: '2', label: 'Österreich' },
      { value: '3', label: 'Schweiz' }
    ]

    return (
      <div>
        <FormSelect
          name="country_id"
          label="Land"
          value={value}
          options={categories}
          onValueChange={value => {
            setValue(value)
          }}
        />
      </div>
    )
  },
  args: {
    required: true
  }
}
