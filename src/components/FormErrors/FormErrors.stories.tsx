import type { Meta, StoryObj } from '@storybook/react'
import { FormErrors } from './index'

const meta = {
  title: 'Components/FormErrors',
  component: FormErrors,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FormErrors>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Es ist ein Fehler aufgetreten.',
    errors: {
      username: 'Benutzername muss mindestens 5 Zeichen lang sein.',
      password:
        'Passwort muss mindestens 8 Zeichen lang sein und enthalten mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen.'
    }
  }
}
