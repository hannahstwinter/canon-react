import { shallow } from 'enzyme';
import CheckboxColumnHeader from '../transpiled/CheckboxColumnHeader';

describe('ColumnHeader', () => {
  it('renders correctly', () => {
    const header = shallow(
      <CheckboxColumnHeader />
    );

    expect(header.equals(
      <th className="rs-table-checkbox" />
    )).toBe(true);
  });
});
