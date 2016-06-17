import { shallow } from 'enzyme';
import DataTable from '../transpiled/DataTable';

describe('DataTable', () => {
  let dataTable;

  describe('when rendered', () => {
    beforeEach(() => {
      dataTable = shallow(
        <DataTable>
          <span className="test-child-1" />
          <span className="test-child-2" />
        </DataTable>
      );
    });

    it('renders a table element with the rs-list-table class', () => {
      const table = dataTable.find('table');

      expect(table.length).toBe(1);
      expect(table.hasClass('rs-list-table')).toBe(true);
    });

    it('renders its children', () => {
      expect(dataTable.find('span').length).toBe(2);
    });
  });

  describe('empty overlay', () => {
    it('is rendered if isEmpty is true', () => {
      dataTable = shallow(
        <DataTable isEmpty emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(dataTable.find('.empty_overlay').length).toBe(1);
    });

    it('is not rendered if isEmpty is false', () => {
      dataTable = shallow(
        <DataTable isEmpty={ false } emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(dataTable.find('.empty_overlay').length).toBe(0);
    });
  });

  describe('loading overlay', () => {
    it('is rendered if isLoading is true', () => {
      dataTable = shallow(
        <DataTable isLoading loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(dataTable.find('.loading_overlay').length).toBe(1);
    });

    it('is not rendered if isLoading is false', () => {
      dataTable = shallow(
        <DataTable isLoading={ false } loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(dataTable.find('.loading_overlay').length).toBe(0);
    });
  });

  describe('error overlay', () => {
    it('is rendered if isErrored is true', () => {
      dataTable = shallow(
        <DataTable isErrored errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(dataTable.find('.error_overlay').length).toBe(1);
    });

    it('is not rendered if isErrored is false', () => {
      dataTable = shallow(
        <DataTable isErrored={ false } errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(dataTable.find('.error_overlay').length).toBe(0);
    });
  });
});
