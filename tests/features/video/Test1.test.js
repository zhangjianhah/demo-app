import React from 'react';
import { shallow } from 'enzyme';
import { Test1 } from '../../../src/features/video';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Test1 />);
  expect(renderedComponent.find('.video-test-1').length).toBe(1);
});
