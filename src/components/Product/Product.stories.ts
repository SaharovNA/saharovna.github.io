import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './Product';


const meta: Meta<typeof Product> = {
    title: 'MyComponents/Market/Product',
    component: Product,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProduct: Story = {};