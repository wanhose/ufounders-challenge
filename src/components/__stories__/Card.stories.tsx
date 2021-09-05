import { Meta, Story } from '@storybook/react';

import Card, { CardProps } from '../Card';

export default {
  args: {
    fullName: 'María Rodríguez Gómez',
    id: '12345678901234',
    isPresent: true,
    ticket: 12345678901234,
  },
  component: Card,
  title: 'Components/Card',
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
