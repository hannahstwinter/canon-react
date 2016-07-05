import { Component, PropTypes } from 'react';
import classNames from 'classnames';

const SIZE_CLASSES = {
  'small': 'rs-embedded-small',
  'medium': 'rs-embedded-medium',
  'large': 'rs-embedded-large'
};

class EmbeddedListTable extends Component {
  render() {
    let classes;

    const {
      children,
      className,
      emptyOverlay,
      errorOverlay,
      isEmpty,
      isErrored,
      isLoading,
      loadingOverlay,
      size
    } = this.props;
    const sizeClass = SIZE_CLASSES[size];

    classes = classNames(
      'rs-embedded-list-table-wrapper',
      sizeClass,
      className
    );

    return (
      <div { ...this.props } className={ classes }>
        <table className="rs-list-table rs-embedded-list-table">
          { children }
        </table>
        { isEmpty ? emptyOverlay : null }
        { isLoading ? loadingOverlay : null }
        { isErrored ? errorOverlay : null }
      </div>
    );
  }
}

EmbeddedListTable.defaultProps = {
  isEmpty: false,
  isErrored: false,
  isLoading: false,
  size: 'small'
};

EmbeddedListTable.propTypes = {
  children: PropTypes.node,
  className: React.PropTypes.string,
  emptyOverlay: PropTypes.node,
  errorOverlay: PropTypes.node,
  isEmpty: PropTypes.bool,
  isErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingOverlay: PropTypes.node,
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES))
};

export default EmbeddedListTable;
