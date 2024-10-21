import type { Meta, StoryObj } from '@storybook/react';
 
import { LangSwitcher, LangSwitcherExample } from './LangSwitcher';
import '../providers/LangProvider/i18n';
 
const meta: Meta<typeof LangSwitcher> = {
  title: 'MyComponents/Switchers/LangSwitcher',
  component: LangSwitcherExample,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleLangSwitcher: Story = {
  args: {
      //content: 'Содержимое окна',
      //children: ''
  }
};