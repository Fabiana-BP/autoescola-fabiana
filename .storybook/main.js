module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|mdx)",
    "../src/styles/**/*.stories.@(js|mdx)",
    "../src/components/**/*.stories.@(js|mdx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
  ],
};
