import { shallow } from 'enzyme';
import ListTable from '../transpiled/ListTable';

describe('ListTable', () => {
  let listTable;

  describe('when rendered', () => {
    beforeEach(() => {
      listTable = shallow(
        <ListTable>
          <span className="test-child-1" />
          <span className="test-child-2" />
        </ListTable>
      );
    });

    it('renders a table element with the rs-list-table class', () => {
      const table = listTable.find('table');

      expect(table.length).toBe(1);
      expect(table.hasClass('rs-list-table')).toBe(true);
    });

    it('renders its children', () => {
      expect(listTable.find('span').length).toBe(2);
    });
  });

  describe('empty overlay', () => {
    it('is rendered if isEmpty is true', () => {
      listTable = shallow(
        <ListTable isEmpty emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(listTable.find('.empty_overlay').length).toBe(1);
    });

    it('is not rendered if isEmpty is false', () => {
      listTable = shallow(
        <ListTable isEmpty={ false } emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(listTable.find('.empty_overlay').length).toBe(0);
    });
  });

  describe('loading overlay', () => {
    it('is rendered if isLoading is true', () => {
      listTable = shallow(
        <ListTable isLoading loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(listTable.find('.loading_overlay').length).toBe(1);
    });

    it('is not rendered if isLoading is false', () => {
      listTable = shallow(
        <ListTable isLoading={ false } loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(listTable.find('.loading_overlay').length).toBe(0);
    });
  });

  describe('error overlay', () => {
    it('is rendered if isErrored is true', () => {
      listTable = shallow(
        <ListTable isErrored errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(listTable.find('.error_overlay').length).toBe(1);
    });

    it('is not rendered if isErrored is false', () => {
      listTable = shallow(
        <ListTable isErrored={ false } errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(listTable.find('.error_overlay').length).toBe(0);
    });
  });
});
