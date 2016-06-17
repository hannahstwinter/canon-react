import { shallow } from 'enzyme';
import ErrorOverlay from '../transpiled/ErrorOverlay';
import DataTableOverlay from '../transpiled/DataTableOverlay';

describe('ErrorOverlay', () => {
  let errorOverlay, overlay;

  beforeEach(() => {
    errorOverlay = shallow(
      <ErrorOverlay message="This is an error message" />
    );

    overlay = errorOverlay.find(DataTableOverlay);
  });

  it('renders a root DataTableOverlay', () => {
    expect(errorOverlay.type()).toBe(DataTableOverlay);
  });

  it('passes an rs-table-overlay-error className', () => {
    expect(overlay.props().className).toBe('rs-table-overlay-error');
  });

  describe('the message', () => {
    let message;

    beforeEach(() => {
      message = shallow(overlay.props().message);
    });

    it('has an error indicator icon', () => {
      expect(message.find('.rs-icon-error-indicator').length).toBe(1);
    });

    it('has the expected text', () => {
      expect(message.text()).toBe('This is an error message');
    });
  });
});
