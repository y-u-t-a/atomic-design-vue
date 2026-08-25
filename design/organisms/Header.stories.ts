import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import Header from './Header.vue'

const meta: Meta<typeof Header> = {
  title: 'design/organisms/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'App',
    onLogin: fn(),
    onLogout: fn(),
    onSignUp: fn(),
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    user: null,
  },
}
