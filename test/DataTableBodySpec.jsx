import { shallow } from 'enzyme';
import DataTableBody from '../transpiled/DataTableBody';

describe('DataTableBody', () => {
  let dataTableBody, collection;

  const DummyRow = ({ instance }) => (<div>{ instance.name }</div>);

  beforeEach(() => {
    collection = [
      { id: 1, name: 'one' },
      { id: 2, name: 'two' }
    ];

    dataTableBody = shallow(
      <DataTableBody collection={ collection }>
        <DummyRow />
      </DataTableBody>
    );
  });

  it('wraps the data in a tbody', () => {
    expect(dataTableBody.type()).toEqual('tbody');
  });

  it('duplicates the child for each object in the collection', () => {
    expect(dataTableBody.find(DummyRow).length).toBe(2);
  });

  it('passes the objects in the collection as the instance property of the children', () => {
    expect(dataTableBody.find(DummyRow).at(0).prop('instance')).toBe(collection[0]);
    expect(dataTableBody.find(DummyRow).at(1).prop('instance')).toBe(collection[1]);
  });
});
