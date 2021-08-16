import React from 'react';
import { shallow } from 'enzyme';
import { Info } from '../../../src/features/video/Info';

describe('video/Info', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Info {...props} />
    );

    expect(
      renderedComponent.find('.video-info').length
    ).toBe(1);
  });
});
