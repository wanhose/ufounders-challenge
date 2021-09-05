import { Meta, Story } from '@storybook/react';

import Logo, { LogoProps } from '../Logo';

export default {
  argTypes: {
    variant: { table: { disable: true } },
  },
  component: Logo,
  title: 'Components/Logo',
} as Meta<LogoProps>;

const Template: Story<LogoProps> = (args) => <Logo style={{ height: 60 }} {...args} />;

export const Isologotype = Template.bind({});
Isologotype.args = {
  variant: 'isologotype',
};

export const Isotype = Template.bind({});
Isotype.args = {
  variant: 'isotype',
};
