import React from 'react';
import { shallow } from 'enzyme';
import { VideoList } from '../../../src/features/video/VideoList';

describe('video/VideoList', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <VideoList {...props} />
    );

    expect(
      renderedComponent.find('.video-video-list').length
    ).toBe(1);
  });
});
