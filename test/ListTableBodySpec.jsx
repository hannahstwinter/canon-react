import { shallow } from 'enzyme';
import ListTableBody from '../transpiled/ListTableBody';

describe('ListTableBody', () => {
  let listTableBody, collection;

  const DummyRow = ({ instance }) => (<div>{ instance.name }</div>);

  beforeEach(() => {
    collection = [
      { id: 1, name: 'one' },
      { id: 2, name: 'two' }
    ];

    listTableBody = shallow(
      <ListTableBody collection={ collection }>
        <DummyRow />
      </ListTableBody>
    );
  });

  it('wraps the data in a tbody', () => {
    expect(listTableBody.type()).toEqual('tbody');
  });

  it('duplicates the child for each object in the collection', () => {
    expect(listTableBody.find(DummyRow).length).toBe(2);
  });

  it('passes the objects in the collection as the instance property of the children', () => {
    expect(listTableBody.find(DummyRow).at(0).prop('instance')).toBe(collection[0]);
    expect(listTableBody.find(DummyRow).at(1).prop('instance')).toBe(collection[1]);
  });
});
