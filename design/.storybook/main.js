import vue from "@vitejs/plugin-vue";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  // @storybook/vue3-vite v10 は @vitejs/plugin-vue を同梱しないため、明示的に追加する
  viteFinal: (viteConfig) => ({
    ...viteConfig,
    plugins: [...(viteConfig.plugins ?? []), vue()]
  })
};
export default config;
