import Header from '../organisms/Header.vue';

export default {
  title: 'design/organisms/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      Header: Header,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<Header title="title" :user="user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    title: "App",
    user: {
      name: 'Jane Doe',
    },
    logoutHandler: () => { alert("Log out !") }
  },
};

export const LoggedOut = {
  args: {
    title: "App",
    user: null,
    loginHandler: () => { alert("Log in !") },
    signUpHandler: () => { alert("Sign up !") }
  },
};