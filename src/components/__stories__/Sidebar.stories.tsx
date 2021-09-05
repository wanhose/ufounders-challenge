import { Meta, Story } from '@storybook/react';

import Sidebar from '../Sidebar';

export default {
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/Sidebar',
} as Meta;

const Template: Story = (args) => (
  <div style={{ minHeight: '100vh' }}>
    <Sidebar {...args} />
  </div>
);

export const Default = Template.bind({});
