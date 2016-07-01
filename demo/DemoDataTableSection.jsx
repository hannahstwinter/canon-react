import React from 'react';

import DataTable from './DataTable';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import EmbeddedDataTable from './EmbeddedDataTable';
import ErrorOverlay from './ErrorOverlay';
import LoadingOverlay from './LoadingOverlay';
import EmptyOverlay from './EmptyOverlay';
import SortDirection from './SortDirection';
import CheckboxColumnHeader from './CheckboxColumnHeader';
import StatusColumnHeader from './StatusColumnHeader';
import TextColumnHeader from './TextColumnHeader';

const DemoDataTableHeader = ({ onSort, sortColumn, direction }) => (
  <DataTableHeader { ...{ onSort, sortColumn, direction } }>
    <StatusColumnHeader />
    <CheckboxColumnHeader />
    <TextColumnHeader columnId="name" className="name" sortable label="Name" />
    <TextColumnHeader columnId="count" className="count" sortable label="Count" />
  </DataTableHeader>
);

DemoDataTableHeader.propTypes = {
  onSort: React.PropTypes.func,
  sortColumn: React.PropTypes.string,
  direction: React.PropTypes.oneOf([
    SortDirection.ASCENDING,
    SortDirection.DESCENDING
  ])
};

const DemoDataTableRow = ({ instance }) => (
  <tr data-model_id={ instance.id }>
    <td className="rs-table-status rs-table-status-ok"></td>
    <td className="rs-table-checkbox"><input type="checkbox" /></td>
    <td className="rs-table-text">{ instance.name }</td>
    <td className="rs-table-text">{ instance.count }</td>
  </tr>
);

DemoDataTableRow.propTypes = {
  instance: React.PropTypes.object.isRequired
};

class DemoDataTableSection extends React.Component {
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
          <h2>Data Table</h2>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Data Table</h3>
          <DataTable style={ tableStyle }>
            <DemoDataTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <DataTableBody collection={ sortedCollection }>
              <DemoDataTableRow />
            </DataTableBody>
          </DataTable>
          <hr />
          <h3>Empty Overlay</h3>
          <DataTable style={ tableStyle } isEmpty emptyOverlay={ emptyOverlay }>
            <DemoDataTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <DataTableBody collection={ [] }>
              <DemoDataTableRow />
            </DataTableBody>
          </DataTable>
          <hr />
          <h3>Error Overlay</h3>
          <DataTable style={ tableStyle } isErrored errorOverlay={ errorOverlay }>
            <DemoDataTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <DataTableBody collection={ [] }>
              <DemoDataTableRow />
            </DataTableBody>
          </DataTable>
          <hr />
          <h3>Loading Overlay</h3>
          <DataTable style={ tableStyle } isLoading loadingOverlay={ loadingOverlay }>
            <DemoDataTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <DataTableBody collection={ [] }>
              <DemoDataTableRow />
            </DataTableBody>
          </DataTable>
          <hr />
          <h3>Embedded Data Table</h3>
          <EmbeddedDataTable size="medium" style={ tableStyle }>
            <DemoDataTableHeader onSort={ this._handleSort } sortColumn={ this.state.sortColumn } direction={ this.state.direction } />
            <DataTableBody collection={ sortedCollection }>
              <DemoDataTableRow />
            </DataTableBody>
          </EmbeddedDataTable>
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

export default DemoDataTableSection;
