import type { Meta, StoryObj } from '@storybook/react';
 
import { Logo } from './Logo';
 
const meta: Meta<typeof Logo> = {
  title: 'MyComponents/Logo',
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoImage: Story = {};