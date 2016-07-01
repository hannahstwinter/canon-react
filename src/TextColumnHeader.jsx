import { Component, PropTypes } from 'react';
import SortDirection from './SortDirection';
import classNames from 'classnames';

class TextColumnHeader extends Component {
  render() {
    let classes;
    const { label, sortable, direction, className } = this.props;

    if (sortable) {
      classes = classNames(
        'rs-table-sort',
        { 'rs-table-sort-asc': direction === SortDirection.ASCENDING },
        { 'rs-table-sort-desc': direction === SortDirection.DESCENDING },
        className
      );

      return (
        <th>
          <a href="#" onClick={ (ev) => { this._handleClick(ev); } } className={ classes }>
            <span className="rs-table-sort-text">{ label }</span>
            <span className="rs-table-sort-indicator"></span>
          </a>
        </th>
      );
    }

    return (
      <th>
        <span className={ classNames('rs-table-sort-text', className) }>{ label }</span>
      </th>
    );
  }

  _handleClick(ev) {
    let newDirection;
    const { direction } = this.props;

    if (direction === SortDirection.ASCENDING) {
      newDirection = SortDirection.DESCENDING;
    } else {
      newDirection = SortDirection.ASCENDING;
    }
    this.props.onSort(newDirection);

    ev.preventDefault();
    ev.stopPropagation();
  }
}

TextColumnHeader.defaultProps = {
  label: '',
  sortable: false,
  onSort: () => {}
};

TextColumnHeader.propTypes = {
  label: PropTypes.string.isRequired,
  sortable: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
  direction: PropTypes.oneOf([
    SortDirection.ASCENDING,
    SortDirection.DESCENDING
  ])
};

export default TextColumnHeader;
