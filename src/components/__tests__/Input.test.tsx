import { render } from 'tests/utils';

import Input from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { container } = render(<Input error={false} errorMessage="" label="Jest" value="jest" />);

    expect(container).toMatchSnapshot('Regular');
  });

  it('error renders correctly', () => {
    const { container } = render(<Input error errorMessage="Error" label="Jest" value="jest" />);

    expect(container).toMatchSnapshot('Error');
  });
});
