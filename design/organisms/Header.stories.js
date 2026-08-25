import { fn } from 'storybook/test'
import Header from './Header.vue'

export default {
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
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
