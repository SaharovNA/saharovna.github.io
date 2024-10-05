import type { Meta, StoryObj } from '@storybook/react';
import { ProductDescFull } from './ProductDescFull';


const meta: Meta<typeof ProductDescFull> = {
    title: 'MyComponents/Market/ProductDescFull',
    component: ProductDescFull,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProductFull: Story = {
    args: {
        cost: 100, 
        pics: ['picture1.png','picture2.png'],
        categoryName: 'Категория 1', 
        productName: 'Продукт 1', 
        productDesc: 'Описание продукта 1'
    }
};