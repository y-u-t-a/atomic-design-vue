import type { Meta, StoryObj } from '@storybook/vue3'
import { within, userEvent } from 'storybook/test'
import MyPage from './Page.vue'

const meta: Meta<typeof MyPage> = {
  title: 'design/pages/Page',
  component: MyPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {}

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}
