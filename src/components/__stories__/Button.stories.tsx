import { Meta, Story } from '@storybook/react';

import Button from '../Button';

export default {
  args: {
    children: 'Click me!',
  },
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
