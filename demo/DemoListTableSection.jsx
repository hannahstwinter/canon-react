import React from 'react';

import ListTable from './ListTable';
import ListTableHeader from './ListTableHeader';
import ListTableBody from './ListTableBody';
import EmbeddedListTable from './EmbeddedListTable';
import ErrorOverlay from './ErrorOverlay';
import LoadingOverlay from './LoadingOverlay';
import EmptyOverlay from './EmptyOverlay';
import SortDirection from './SortDirection';
import CheckboxColumnHeader from './CheckboxColumnHeader';
import StatusColumnHeader from './StatusColumnHeader';
import TextColumnHeader from './TextColumnHeader';

const DemoListTableHeader = ({ onSort, sortColumn, direction }) => (
  <ListTableHeader { ...{ onSort, sortColumn, direction } }>
    <StatusColumnHeader />
    <CheckboxColumnHeader />
    <TextColumnHeader columnId="name" className="name" sortable label="Name" />
    <TextColumnHeader columnId="count" className="count" sortable label="Count" />
  </ListTableHeader>
);

DemoListTableHeader.propTypes = {
  onSort: React.PropTypes.func,
  sortColumn: React.PropTypes.string,
  direction: React.PropTypes.oneOf([
    SortDirection.ASCENDING,
    SortDirection.DESCENDING
  ])
};

const DemoListTableRow = ({ instance }) => (
  <tr data-model_id={ instance.id }>
    <td className="rs-table-status rs-table-status-ok"></td>
    <td className="rs-table-checkbox"><input type="checkbox" /></td>
    <td className="rs-table-text">{ instance.name }</td>
    <td className="rs-table-text">{ instance.count }</td>
  </tr>
);

DemoListTableRow.propTypes = {
  instance: React.PropTypes.object.isRequired
};

class DemoListTableSection extends React.Component {
  constructor() {
    super();

    this.state = {
      sortColumn: 'name',
      direction: SortDirection.ASCENDING
    };

    this._handleSort = this._handleSort.bind(this);
  }

  render() {
    const sortedCollection = this._sort();

    const tableStyle = {width: '500px'};

    const emptyOverlay = (<EmptyOverlay title="Empty Overlay" subtitle="I am so empty" message="Empty, empty, empty" />);
    const errorOverlay = (<ErrorOverlay message="There was an error loading data" />);
    const loadingOverlay = (<LoadingOverlay />);

    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>List Table</h2>
        </div>
        <div className='rs-detail-section-body'>
          <h3>List Table</h3>
          <ListTable style={ tableStyle }>
            <DemoListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <ListTableBody collection={ sortedCollection }>
              <DemoListTableRow />
            </ListTableBody>
          </ListTable>
          <hr />
          <h3>Empty Overlay</h3>
          <ListTable style={ tableStyle } isEmpty emptyOverlay={ emptyOverlay }>
            <DemoListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <ListTableBody collection={ [] }>
              <DemoListTableRow />
            </ListTableBody>
          </ListTable>
          <hr />
          <h3>Error Overlay</h3>
          <ListTable style={ tableStyle } isErrored errorOverlay={ errorOverlay }>
            <DemoListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <ListTableBody collection={ [] }>
              <DemoListTableRow />
            </ListTableBody>
          </ListTable>
          <hr />
          <h3>Loading Overlay</h3>
          <ListTable style={ tableStyle } isLoading loadingOverlay={ loadingOverlay }>
            <DemoListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <ListTableBody collection={ [] }>
              <DemoListTableRow />
            </ListTableBody>
          </ListTable>
          <hr />
          <h3>Embedded List Table</h3>
          <EmbeddedListTable size="medium" style={ tableStyle }>
            <DemoListTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <ListTableBody collection={ sortedCollection }>
              <DemoListTableRow />
            </ListTableBody>
          </EmbeddedListTable>
        </div>
      </div>
    );
  }

  _handleSort(sortDirection, columnId) {
    this.setState({
      sortColumn: columnId,
      direction: sortDirection
    });
  }

  _sort() {
    return Array.from(COLLECTION).sort(this._compareRows.bind(this));
  }

  _compareRows(row1, row2) {
    if (this.state.sortColumn === 'name') {
      return this._compareStringValues(row1.name, row2.name);
    } else if (this.state.sortColumn === 'count') {
      return this._compareNumericValues(row1.count, row2.count);
    }
  }

  _compareStringValues(a, b) {
    if (this.state.direction === SortDirection.ASCENDING) {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  }

  _compareNumericValues(a, b) {
    if (a === b) {
      return 0;
    }

    if (this.state.direction === SortDirection.ASCENDING) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (a > b) {
        return -1;
      } else {
        return 1;
      }
    }
  }
}

const COLLECTION = [
  {id: 1, name: 'one', count: 1},
  {id: 2, name: 'two', count: 42},
  {id: 3, name: 'three', count: 12},
  {id: 4, name: 'four', count: 6},
];

export default DemoListTableSection;
