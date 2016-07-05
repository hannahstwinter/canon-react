import { shallow } from 'enzyme';
import EmbeddedListTable from '../transpiled/EmbeddedListTable';

describe('EmbeddedListTable', () => {
  let listTable;

  describe('when rendered', () => {
    beforeEach(() => {
      listTable = shallow(
        <EmbeddedListTable>
          <span className="test-child-1" />
          <span className="test-child-2" />
        </EmbeddedListTable>
      );
    });

    it('renders a wrapper div', () => {
      expect(listTable.type()).toBe('div');
      expect(listTable.hasClass('rs-embedded-list-table-wrapper')).toBe(true);
    });

    it('renders a table element with the rs-list-table and rs-embedded-list-table classes', () => {
      const table = listTable.find('table');

      expect(table.length).toBe(1);
      expect(table.hasClass('rs-list-table')).toBe(true);
      expect(table.hasClass('rs-embedded-list-table')).toBe(true);
    });

    it('renders its children', () => {
      expect(listTable.find('span').length).toBe(2);
    });
  });

  describe('empty overlay', () => {
    it('is rendered if isEmpty is true', () => {
      listTable = shallow(
        <EmbeddedListTable isEmpty emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(listTable.find('.empty_overlay').length).toBe(1);
    });

    it('is not rendered if isEmpty is false', () => {
      listTable = shallow(
        <EmbeddedListTable isEmpty={ false } emptyOverlay={ <span className="empty_overlay">I'm so empty!</span> } />
      );

      expect(listTable.find('.empty_overlay').length).toBe(0);
    });
  });

  describe('loading overlay', () => {
    it('is rendered if isLoading is true', () => {
      listTable = shallow(
        <EmbeddedListTable isLoading loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(listTable.find('.loading_overlay').length).toBe(1);
    });

    it('is not rendered if isLoading is false', () => {
      listTable = shallow(
        <EmbeddedListTable isLoading={ false } loadingOverlay={ <span className="loading_overlay">I'm loading your data!</span> } />
      );

      expect(listTable.find('.loading_overlay').length).toBe(0);
    });
  });

  describe('error overlay', () => {
    it('is rendered if isErrored is true', () => {
      listTable = shallow(
        <EmbeddedListTable isErrored errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(listTable.find('.error_overlay').length).toBe(1);
    });

    it('is not rendered if isErrored is false', () => {
      listTable = shallow(
        <EmbeddedListTable isErrored={ false } errorOverlay={ <span className="error_overlay">There was a problem loading your data!</span> } />
      );

      expect(listTable.find('.error_overlay').length).toBe(0);
    });
  });

  describe('wrapper', () => {
    it('defaults to the small size', () => {
      listTable = shallow(<EmbeddedListTable />);

      expect(listTable.hasClass('rs-embedded-small')).toBe(true);
    });

    it('supports the small size', () => {
      listTable = shallow(<EmbeddedListTable size="small" />);

      expect(listTable.hasClass('rs-embedded-small')).toBe(true);
    });

    it('supports the medium size', () => {
      listTable = shallow(<EmbeddedListTable size="medium" />);

      expect(listTable.hasClass('rs-embedded-medium')).toBe(true);
    });

    it('supports the large size', () => {
      listTable = shallow(<EmbeddedListTable size="large" />);

      expect(listTable.hasClass('rs-embedded-large')).toBe(true);
    });

    it('passes the supplied className', () => {
      listTable = shallow(<EmbeddedListTable className="test-class" />);

      expect(listTable.hasClass('test-class')).toBe(true);
    });
  });
});
