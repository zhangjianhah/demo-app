import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  VIDEO_HANDLE_PAGES,
} from './constants';

export function handlePages(currentPage) {
  return {
    type: VIDEO_HANDLE_PAGES, currentPage
  };
}

export function useHandlePages() {
  const dispatch = useDispatch();
  const boundAction = useCallback((...params) => dispatch(handlePages(...params)), [dispatch]);
  return { handlePages: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case VIDEO_HANDLE_PAGES:
      return {
        ...state,
        videoInfo: {
          ...state.videoInfo,
          pagnation: {
            ...state.videoInfo.pagnation,
            currentPage: action.currentPage + 1,
          }
        }
      };

    default:
      return state;
  }
}
