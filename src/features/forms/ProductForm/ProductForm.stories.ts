import type { Meta, StoryObj } from '@storybook/react';
import { ProductForm } from './ProductForm';
import { Product, createRandomProduct } from '../../../homeworks/ts1/3_write';


const meta: Meta<typeof ProductForm> = {
    title: 'MyComponents/Forms/Product',
    component: ProductForm,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const randomProduct: Product = createRandomProduct(Date.now().toString())

export default meta;
type Story = StoryObj<typeof meta>;

//export const ExampleProductForm: Story = {};

export const AddProduct: Story = {
    args: {
        product: null,
    }
};
export const EditProduct: Story = {
    args: {
        product: randomProduct,
    }
};