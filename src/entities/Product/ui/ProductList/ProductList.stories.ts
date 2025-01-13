import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';


const meta: Meta<typeof ProductList> = {
    title: 'MyComponents/Market/ProductList',
    component: ProductList,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProductList: Story = {
    args: {
      products: 
      [
        {
          id: 'prd_1',
          price: 100, 
          category: {id: 'cat_1', name: 'Категория 1'}, 
          name: 'Продукт 1', 
          desc: 'Описание продукта 1',
          photo: 'Pict 1',
          createdAt: Date.now().toString()
      },
        {
          id: 'prd_2',
          price: 200, 
          category: {id: 'cat_2', name: 'Категория 2'}, 
          name: 'Продукт 2', 
          desc: 'Описание продукта 2',
          photo: 'Pict 2',
          createdAt: Date.now().toString()
        }
      ]
    }
};