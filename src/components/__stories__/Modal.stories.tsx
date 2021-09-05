import { Meta, Story } from '@storybook/react';

import Modal, { ModalProps } from '../Modal';

export default {
  args: {
    isOpen: true,
  },
  component: Modal,
  title: 'Components/Modal',
} as Meta<ModalProps>;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    At vero eos et accusamus et iusto odio dignissimos ducimus
    <br /> qui blanditiis praesentium voluptatum deleniti atque corrupti
    <br /> quos dolores et quas molestias excepturi sint occaecati cupiditate
    <br /> non provident, similique sunt in culpa qui officia deserunt mollitia
    <br /> animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
    distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
    minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
    repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
    tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
    perferendis doloribus asperiores repellat.
  </Modal>
);

export const Default = Template.bind({});
