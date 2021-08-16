import {
  VIDEO_HANDLE_PAGES,
} from '../../../../src/features/video/redux/constants';

import {
  handlePages,
  reducer,
} from '../../../../src/features/video/redux/handlePages';

describe('video/redux/handlePages', () => {
  it('returns correct action by handlePages', () => {
    expect(handlePages()).toHaveProperty('type', VIDEO_HANDLE_PAGES);
  });

  it('handles action type VIDEO_HANDLE_PAGES correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: VIDEO_HANDLE_PAGES }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
