import { shallow } from 'enzyme';
import DataTableHeader from '../transpiled/DataTableHeader';
import SortDirection from '../transpiled/SortDirection';

describe('DataTableHeader', () => {
  let header, row, sortHandler;

  beforeEach(() => {
    sortHandler = jasmine.createSpy('sortHandler');
    header = shallow(
      <DataTableHeader sortColumn="one" direction={ SortDirection.ASCENDING } onSort={ sortHandler }>
        <th key="one" columnId="one" sortable />
        <th id="two" />
      </DataTableHeader>
    );
    row = header.find('tr');
  });

  it('renders a root thead element', () => {
    expect(header.type()).toBe('thead');
  });

  it('wraps the headers in a tr element', () => {
    expect(header.childAt(0).type()).toBe('tr');
    expect(row.length).toBe(1);
  });

  it('adds the children', () => {
    expect(row.children().length).toEqual(2);
  });

  it('sets the direction property on the sort column', () => {
    expect(row.childAt(0).props().direction).toEqual(SortDirection.ASCENDING);
  });

  it('does not set the direction property on the non-sort column', () => {
    expect(row.childAt(1).props().direction).toEqual(null);
  });
});
