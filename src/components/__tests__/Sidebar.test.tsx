import { render } from 'tests/utils';

import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const { container } = render(<Sidebar />);

    expect(container).toMatchSnapshot('Regular');
  });
});
