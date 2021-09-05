import { render } from 'tests/utils';

import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot('Regular');
  });
});
