import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import Button, { type ButtonProps } from './Button.vue'

// click は emit ではなくネイティブイベントのフォールスルーで親に届くため、
// コンポーネントの props には現れない
type ButtonArgs = ButtonProps & {
  onClick?: (event: MouseEvent) => void
}

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<ButtonArgs> = {
  title: 'design/atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    onClick: fn(),
  },
}

export default meta

type Story = StoryObj<ButtonArgs>

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
