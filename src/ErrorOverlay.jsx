import DataTableOverlay from './DataTableOverlay';
import { PropTypes } from 'react';

const ErrorOverlay = ({ message }) => (
  <DataTableOverlay
    className="rs-table-overlay-error"
    message={ <span><i className="rs-icon-error-indicator"></i>{ message }</span> }
  />
);

ErrorOverlay.propTypes = {
  message: PropTypes.node.isRequired
};

export default ErrorOverlay;
