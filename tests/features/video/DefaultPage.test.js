import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/video/DefaultPage';

describe('video/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.video-default-page').length
    ).toBe(1);
  });
});
