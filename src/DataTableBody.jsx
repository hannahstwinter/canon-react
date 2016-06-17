import { Component, PropTypes } from 'react';

class DataTableBody extends Component {
  render() {
    return (
      <tbody>
        { this._cloneRowPerInstance() }
      </tbody>
    );
  }

  _cloneRowPerInstance() {
    return this.props.collection.map(this._cloneRow.bind(this));
  }

  _cloneRow(instance) {
    return React.cloneElement(this.props.children, {
      instance: instance,
      key: instance.id
    });
  }
}

DataTableBody.propTypes = {
  children: PropTypes.element.isRequired,
  collection: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DataTableBody;
