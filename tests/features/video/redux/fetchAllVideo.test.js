import {
  VIDEO_FETCH_ALL_VIDEO,
} from '../../../../src/features/video/redux/constants';

import {
  fetchAllVideo,
  reducer,
} from '../../../../src/features/video/redux/fetchAllVideo';

describe('video/redux/fetchAllVideo', () => {
  it('returns correct action by fetchAllVideo', () => {
    expect(fetchAllVideo()).toHaveProperty('type', VIDEO_FETCH_ALL_VIDEO);
  });

  it('handles action type VIDEO_FETCH_ALL_VIDEO correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: VIDEO_FETCH_ALL_VIDEO }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
