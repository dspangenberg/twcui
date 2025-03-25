import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormTextarea } from './index'

const meta = {
  title: 'Components/FormTextarea',
  component: FormTextarea,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FormTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [mail, setMail] = useState('danny.spangenberg@twiceware.de')

    return (
      <div>
        <FormTextarea
          id="mail"
          name="mail"
          rows={4}
          className="field-sizing-content w-full"
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
