import type { Meta, StoryObj } from '@storybook/react';
 
import { ShowWnd } from './ShowWnd';
 
const meta: Meta<typeof ShowWnd> = {
  title: 'MyComponents/ModalWindow/ShowWnd',
  component: ShowWnd,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleShowWnd: Story = {
  args: {
      content: 'Содержимое окна',
      children: ''
  }
};