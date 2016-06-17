import { shallow } from 'enzyme';
import StatusColumnHeader from '../transpiled/StatusColumnHeader';

describe('StatusColumnHeader', () => {
  it('renders correctly', () => {
    const header = shallow(
      <StatusColumnHeader />
    );

    expect(header.equals(
      <th className="rs-table-status" />
    )).toBe(true);
  });
});
