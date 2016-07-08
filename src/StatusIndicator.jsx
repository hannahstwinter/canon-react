import React from 'react';
import classNames from 'classnames';

const STATUS_INDICATOR = {
  'disabled': 'rs-status-disabled',
  'error': 'rs-status-error',
  'ok': 'rs-status-ok',
  'processing': 'rs-status-processing',
  'warning': 'rs-status-warning'
};

const StatusIndicator = (props) => {
  const classes = classNames(
    'rs-status',
    props.className,
    STATUS_INDICATOR[props.status],
    { 'rs-hidden': props.hidden }
  );

  return (
    <span { ...props } className={ classes }>
      { props.children }
    </span>
  );
};

StatusIndicator.propTypes = {
  status: React.PropTypes.oneOf(Object.keys(STATUS_INDICATOR)),
  hidden: React.PropTypes.bool
};

StatusIndicator.defaultProps = {
  status: 'ok',
  hidden: false
};

export default StatusIndicator;
