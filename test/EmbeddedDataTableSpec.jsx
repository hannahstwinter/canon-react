import { shallow } from 'enzyme';
import EmbeddedDataTable from '../transpiled/EmbeddedDataTable';

describe('EmbeddedDataTable', () => {
  let dataTable;

  describe('when rendered', () => {
    beforeEach(() => {
      dataTable = shallow(
        <EmbeddedDataTable>
          <span className="test-child-1" />
          <span className="test-child-2" />
        </EmbeddedDataTable>
      );
    });

    it('renders a wrapper div', () => {
      expect(dataTable.type()).toBe('div');
      expect(dataTable.hasClass('rs-embedded-list-table-wrapper')).toBe(true);
    });

    it('renders a table element with the rs-list-table and rs-embedded-list-table classes', () => {
      const table = dataTable.find('table');

      expect(table.length).toBe(1);
      expect(table.hasClass('rs-list-table')).toBe(true);
      expect(table.hasClass('rs-embedded-list-table')).toBe(true);
    });

    it('renders its children', () => {
      expect(dataTable.find('span').length).toBe(2);
    });
  });

  describe('empty overlay', () => {
    it('is rendered if isEmpty is true', () => {
      dataTable = shallow(
        <EmbeddedDataTable isEmpty emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(dataTable.find('.empty_overlay').length).toBe(1);
    });

    it('is not rendered if isEmpty is false', () => {
      dataTable = shallow(
        <EmbeddedDataTable isEmpty={ false } emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(dataTable.find('.empty_overlay').length).toBe(0);
    });
  });

  describe('loading overlay', () => {
    it('is rendered if isLoading is true', () => {
      dataTable = shallow(
        <EmbeddedDataTable isLoading loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(dataTable.find('.loading_overlay').length).toBe(1);
    });

    it('is not rendered if isLoading is false', () => {
      dataTable = shallow(
        <EmbeddedDataTable isLoading={ false } loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(dataTable.find('.loading_overlay').length).toBe(0);
    });
  });

  describe('error overlay', () => {
    it('is rendered if isErrored is true', () => {
      dataTable = shallow(
        <EmbeddedDataTable isErrored errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(dataTable.find('.error_overlay').length).toBe(1);
    });

    it('is not rendered if isErrored is false', () => {
      dataTable = shallow(
        <EmbeddedDataTable isErrored={ false } errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(dataTable.find('.error_overlay').length).toBe(0);
    });
  });

  describe('wrapper', () => {
    it('defaults to the small size', () => {
      dataTable = shallow(<EmbeddedDataTable />);

      expect(dataTable.hasClass('rs-embedded-small')).toBe(true);
    });

    it('supports the small size', () => {
      dataTable = shallow(<EmbeddedDataTable size="small" />);

      expect(dataTable.hasClass('rs-embedded-small')).toBe(true);
    });

    it('supports the medium size', () => {
      dataTable = shallow(<EmbeddedDataTable size="medium" />);

      expect(dataTable.hasClass('rs-embedded-medium')).toBe(true);
    });

    it('supports the large size', () => {
      dataTable = shallow(<EmbeddedDataTable size="large" />);

      expect(dataTable.hasClass('rs-embedded-large')).toBe(true);
    });

    it('passes the supplied className', () => {
      dataTable = shallow(<EmbeddedDataTable className="test-class" />);

      expect(dataTable.hasClass('test-class')).toBe(true);
    });
  });
});
