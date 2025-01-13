import type { Meta, StoryObj } from '@storybook/react';
 
import { ThemeSwitcher, ThemeSwitcherExample } from './ThemeSwitcher';
 
const meta: Meta<typeof ThemeSwitcher> = {
  title: 'MyComponents/Switchers/ThemeSwitcher',
  component: ThemeSwitcherExample,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleThemeSwitcher: Story = {
  args: {
      //content: 'Содержимое окна',
      //children: ''
  }
};