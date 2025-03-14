import type { Meta, StoryObj } from '@storybook/react'
import { TwicewareSolution } from './index'

const meta = {
  title: 'Components/TwicewareSolution',
  component: TwicewareSolution,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    appWebsite: { control: 'text' },
    appName: { control: 'text' },
    copyrightYear: { control: 'number' },
    hideCopyright: { control: 'boolean' }
  }
} satisfies Meta<typeof TwicewareSolution>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    appWebsite: 'https://example.com',
    appName: 'Example App',
    hideCopyright: false
  }
}

export const WithoutCopyright: Story = {
  args: {
    appWebsite: 'https://example.com',
    appName: 'Example App',
    hideCopyright: true
  }
}

export const CustomAppName: Story = {
  args: {
    appName: 'Custom App Name',
    copyrightYear: 2023
  }
}
