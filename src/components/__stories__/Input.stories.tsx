import { Meta, Story } from '@storybook/react';

import Input, { InputProps } from '../Input';

export default {
  args: {
    label: 'Storybook',
    placeholder: 'Write something here...',
  },
  argTypes: {
    error: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
  },
  component: Input,
  title: 'Components/Input',
} as Meta<InputProps>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  errorMessage: 'An error has ocurred!',
};
