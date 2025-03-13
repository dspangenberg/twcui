import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormInput } from './index'

const meta = {
  title: 'Components/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FormInput>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [mail, setMail] = useState('danny.spangenberg@twiceware.de')

    return (
      <div>
        <FormInput
          id="mail"
          name="mail"
          value={mail}
          onChange={e => setMail(e.target.value)}
          {...args}
        />
      </div>
    )
  },
  args: {
    label: 'E-Mail',
    required: true
  }
}

export const WithError: Story = {
  args: {
    label: 'E-Mail',
    value: 'danny.spangenberg@twiceware.de',
    required: true,
    error: 'Bitte eine gültige E-Mail-Adresse eingeben.'
  }
}

export const WithHelp: Story = {
  args: {
    label: 'E-Mail',
    required: true,
    help: 'Bitte eine gültige E-Mail-Adresse eingeben.'
  }
}
