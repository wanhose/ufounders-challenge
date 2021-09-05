import { render } from 'tests/utils';

import Card from '../Card';

describe('Card', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Card
        fullName="María Rodríguez Gómez"
        id="12345678901234"
        isPresent
        ticket={12345678901234}
      />,
    );

    expect(container).toMatchSnapshot('Regular');
  });
});
