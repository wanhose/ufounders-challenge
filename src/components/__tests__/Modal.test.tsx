import { render } from 'tests/utils';

import Modal from '../Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    const { container } = render(<Modal isOpen onClose={jest.fn} />);

    expect(container).toMatchSnapshot('Regular');
  });
});
