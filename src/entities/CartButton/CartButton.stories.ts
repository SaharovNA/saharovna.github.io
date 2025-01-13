import type { Meta, StoryObj } from '@storybook/react';
import { CartButton } from './CartButton';


const meta: Meta<typeof CartButton> = {
    title: 'MyComponents/Market/CartButton',
    component: CartButton,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyCart: Story = {
    args: {
        count: 0,
    }
};
export const NoEmptyCart: Story = {
    args: {
        count: 1,
    }
};