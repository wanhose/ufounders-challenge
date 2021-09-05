import { render } from 'tests/utils';

import Logo from '../Logo';

describe('Logo', () => {
  it('isologotype variant renders correctly', () => {
    const { container } = render(<Logo variant="isologotype" />);

    expect(container).toMatchSnapshot('Isologotype');
  });

  it('isotype variant renders correctly', () => {
    const { container } = render(<Logo variant="isotype" />);

    expect(container).toMatchSnapshot('Isotype');
  });
});
