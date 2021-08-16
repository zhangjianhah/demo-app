import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  VIDEO_FETCH_VIDEOS_BEGIN,
  VIDEO_FETCH_VIDEOS_SUCCESS,
  VIDEO_FETCH_VIDEOS_FAILURE,
  VIDEO_FETCH_VIDEOS_DISMISS_ERROR,
} from './constants';
import axios from 'axios';
import { MAIN_DOMAIN } from '../../common/constants'
export function fetchVideos(currentPage, size) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: VIDEO_FETCH_VIDEOS_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      // const doRequest = args.error ? Promise.reject(new Error()) : Promise.resolve();
      let doRequest = undefined;
      doRequest = axios.get(MAIN_DOMAIN + '/video/list', {
        params: {
          currentPage: currentPage,
          size: size
        }
      });
      doRequest.then(
        (res) => {
          console.log(res)
          dispatch({
            type: VIDEO_FETCH_VIDEOS_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: VIDEO_FETCH_VIDEOS_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

export function dismissFetchVideosError() {
  return {
    type: VIDEO_FETCH_VIDEOS_DISMISS_ERROR,
  };
}

export function useFetchVideos() {
  const dispatch = useDispatch();

  const { fetchVideosPending, fetchVideosError } = useSelector(
    state => ({
      fetchVideosPending: state.video.fetchVideosPending,
      fetchVideosError: state.video.fetchVideosError,
    }),
    shallowEqual,
  );

  const boundAction = useCallback((...args) => {
    return dispatch(fetchVideos(...args));
  }, [dispatch]);

  const boundDismissError = useCallback(() => {
    return dispatch(dismissFetchVideosError());
  }, [dispatch]);

  return {
    fetchVideos: boundAction,
    fetchVideosPending,
    fetchVideosError,
    dismissFetchVideosError: boundDismissError,
  };
}

export function reducer(state, action) {

  switch (action.type) {
    case VIDEO_FETCH_VIDEOS_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        videoInfo: {
          ...state.videoInfo,
          fetchVideosPending: true,
          fetchVideosError: null,
        },
      };

    case VIDEO_FETCH_VIDEOS_SUCCESS:
      // The request is success
      return {
        ...state,
        videoInfo: {
          ...state.videoInfo,
          videos: state.videoInfo.videos.concat(action.data.data),
          fetchVideosPending: false,
          fetchVideosError: null,
        },
      };

    case VIDEO_FETCH_VIDEOS_FAILURE:
      // The request is failed
      return {
        ...state,

        videoInfo: {
          ...state.videoInfo,
          fetchVideosPending: false,
          fetchVideosError: action.data.error,
        },
      };

    case VIDEO_FETCH_VIDEOS_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,

        videoInfo: {
          ...state.videoInfo,
          fetchVideosError: null,
        },
      };

    default:
      return state;
  }
}
