import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from './SignUpForm';


const meta: Meta<typeof SignUpForm> = {
    title: 'MyComponents/Forms/SignUp',
    component: SignUpForm,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleSignUpForm: Story = {};