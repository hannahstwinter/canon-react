import { shallow } from 'enzyme';
import EmptyOverlay from '../transpiled/EmptyOverlay';
import DataTableOverlay from '../transpiled/DataTableOverlay';

describe('EmptyOverlay', () => {
  let emptyOverlay, overlay;

  beforeEach(() => {
    emptyOverlay = shallow(
      <EmptyOverlay
        title="This is a title"
        subtitle="This is a subtitle"
        message="This is a message"
      />
    );

    overlay = emptyOverlay.find(DataTableOverlay);
  });

  it('renders the DataTableOverlay', () => {
    expect(overlay.length).toBe(1);
  });

  it('passes the title, subtitle, and message to the overlay', () => {
    expect(overlay.props().title).toBe('This is a title');
    expect(overlay.props().subtitle).toBe('This is a subtitle');
    expect(overlay.props().message).toBe('This is a message');
  });
});
