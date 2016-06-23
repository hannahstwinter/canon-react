import { Component, PropTypes } from 'react';

class DataTable extends Component {
  render() {
    const {
      children,
      emptyOverlay,
      errorOverlay,
      isEmpty,
      isErrored,
      isLoading,
      loadingOverlay
    } = this.props;

    return (
      <div { ...this.props } >
        <table className="rs-list-table">
          { children }
        </table>
        { isEmpty ? emptyOverlay : null }
        { isLoading ? loadingOverlay : null }
        { isErrored ? errorOverlay : null }
      </div>
    );
  }
}

DataTable.defaultProps = {
  isEmpty: false,
  isErrored: false,
  isLoading: false
};

DataTable.propTypes = {
  children: PropTypes.node,
  className: React.PropTypes.string,
  emptyOverlay: PropTypes.node,
  errorOverlay: PropTypes.node,
  isEmpty: PropTypes.bool,
  isErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingOverlay: PropTypes.node
};

export default DataTable;
