import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  VIDEO_FETCH_VIDEOS_BEGIN,
  VIDEO_FETCH_VIDEOS_SUCCESS,
  VIDEO_FETCH_VIDEOS_FAILURE,
  VIDEO_FETCH_VIDEOS_DISMISS_ERROR,
} from '../../../../src/features/video/redux/constants';

import {
  fetchVideos,
  dismissFetchVideosError,
  reducer,
} from '../../../../src/features/video/redux/fetchVideos';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('video/redux/fetchVideos', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchVideos succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchVideos())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', VIDEO_FETCH_VIDEOS_BEGIN);
        expect(actions[1]).toHaveProperty('type', VIDEO_FETCH_VIDEOS_SUCCESS);
      });
  });

  it('dispatches failure action when fetchVideos fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchVideos({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', VIDEO_FETCH_VIDEOS_BEGIN);
        expect(actions[1]).toHaveProperty('type', VIDEO_FETCH_VIDEOS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchVideosError', () => {
    const expectedAction = {
      type: VIDEO_FETCH_VIDEOS_DISMISS_ERROR,
    };
    expect(dismissFetchVideosError()).toEqual(expectedAction);
  });

  it('handles action type VIDEO_FETCH_VIDEOS_BEGIN correctly', () => {
    const prevState = { fetchVideosPending: false };
    const state = reducer(
      prevState,
      { type: VIDEO_FETCH_VIDEOS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchVideosPending).toBe(true);
  });

  it('handles action type VIDEO_FETCH_VIDEOS_SUCCESS correctly', () => {
    const prevState = { fetchVideosPending: true };
    const state = reducer(
      prevState,
      { type: VIDEO_FETCH_VIDEOS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchVideosPending).toBe(false);
  });

  it('handles action type VIDEO_FETCH_VIDEOS_FAILURE correctly', () => {
    const prevState = { fetchVideosPending: true };
    const state = reducer(
      prevState,
      { type: VIDEO_FETCH_VIDEOS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchVideosPending).toBe(false);
    expect(state.fetchVideosError).toEqual(expect.anything());
  });

  it('handles action type VIDEO_FETCH_VIDEOS_DISMISS_ERROR correctly', () => {
    const prevState = { fetchVideosError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: VIDEO_FETCH_VIDEOS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchVideosError).toBe(null);
  });
});

