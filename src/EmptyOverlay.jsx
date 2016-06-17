import DataTableOverlay from './DataTableOverlay';
import { PropTypes } from 'react';

const EmptyOverlay = ({ title, subtitle, message }) => (
  <DataTableOverlay { ...{ title, subtitle, message } } />
);

EmptyOverlay.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  message: PropTypes.node
};

export default EmptyOverlay;
