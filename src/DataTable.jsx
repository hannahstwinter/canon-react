import { PropTypes } from 'react';

const DataTable = ({ children, isEmpty, emptyOverlay, isLoading, loadingOverlay, isErrored, errorOverlay }) => {
  return (
    <div>
      <table className="rs-list-table">
        { children }
      </table>
      { isEmpty ? emptyOverlay : null }
      { isLoading ? loadingOverlay : null }
      { isErrored ? errorOverlay : null }
    </div>
  );
};

DataTable.defaultProps = {
  isEmpty: false,
  isLoading: false,
  isErrored: false
};

DataTable.propTypes = {
  children: PropTypes.node,
  isEmpty: PropTypes.bool,
  emptyOverlay: PropTypes.node,
  isLoading: PropTypes.bool,
  loadingOverlay: PropTypes.node,
  isErrored: PropTypes.bool,
  errorOverlay: PropTypes.node
};

export default DataTable;
