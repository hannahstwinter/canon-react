import StatusIndicator from '../transpiled/StatusIndicator';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('StatusIndicator', () => {
  let statusIndicator, renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <StatusIndicator { ...props }>Status Indicator Text</StatusIndicator>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderWithProps({ id: 'statusIndicator-id', className: 'test-statusIndicator-class' });
    statusIndicator = renderer.getRenderOutput();
  });

  it('creates the default statusIndicator', () => {
    expect(statusIndicator.type).toBe('span');
    expect(statusIndicator.props.hidden).toBe(false);
    expect(statusIndicator.props.className).toEqual('rs-status test-statusIndicator-class rs-status-ok');
  });

  it('keeps all passed in properties', () => {
    expect(statusIndicator.props.id).toBe('statusIndicator-id');
  });

  it('renders the text of the statusIndicator', () => {
    expect(statusIndicator.props.children).toBe('Status Indicator Text');
  });

  it('adds the hidden class when hidden is true', () => {
    renderer.render(<StatusIndicator hidden>StatusIndicator Text</StatusIndicator>);
    statusIndicator = renderer.getRenderOutput();

    expect(statusIndicator.props.className).toEqual('rs-status rs-status-ok rs-hidden');
  });

  describe('statusIndicator types', () => {
    it('ok', () => {
      renderWithProps({ status: 'ok' });
      statusIndicator = renderer.getRenderOutput();

      expect(statusIndicator.props.className).toEqual('rs-status rs-status-ok');
    });

    it('processing', () => {
      renderWithProps({ status: 'processing' });
      statusIndicator = renderer.getRenderOutput();

      expect(statusIndicator.props.className).toEqual('rs-status rs-status-processing');
    });

    it('warning', () => {
      renderWithProps({ status: 'warning' });
      statusIndicator = renderer.getRenderOutput();

      expect(statusIndicator.props.className).toEqual('rs-status rs-status-warning');
    });

    it('error', () => {
      renderWithProps({ status: 'error' });
      statusIndicator = renderer.getRenderOutput();

      expect(statusIndicator.props.className).toEqual('rs-status rs-status-error');
    });

    it('disabled', () => {
      renderWithProps({ status: 'disabled' });
      statusIndicator = renderer.getRenderOutput();

      expect(statusIndicator.props.className).toEqual('rs-status rs-status-disabled');
    });
  });
});
