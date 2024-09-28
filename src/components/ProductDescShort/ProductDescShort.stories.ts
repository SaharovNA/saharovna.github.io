import type { Meta, StoryObj } from '@storybook/react';
import { ProductDescShort } from './ProductDescShort';


const meta: Meta<typeof ProductDescShort> = {
    title: 'MyComponents/Market/ProductDescShort',
    component: ProductDescShort,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProductShort: Story = {
    args: {
        cost: 100, 
        pic: '',
        productName: 'Продукт 1', 
        productDescShort: 'Описание продукта 1'
    }
};