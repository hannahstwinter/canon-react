import { shallow } from 'enzyme';
import LoadingOverlay from '../transpiled/LoadingOverlay';
import DataTableOverlay from '../transpiled/DataTableOverlay';

describe('LoadingOverlay', () => {
  let loadingOverlay;

  it('renders correctly', () => {
    loadingOverlay = shallow(
      <LoadingOverlay />
    );

    expect(loadingOverlay.equals(
      <DataTableOverlay className="rs-table-overlay-loading" message="Loading&hellip;" />
    )).toBe(true);
  });
});
