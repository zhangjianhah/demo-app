import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  VIDEO_FETCH_ALL_VIDEO,
} from './constants';

export function fetchAllVideo() {
  return {
    type: VIDEO_FETCH_ALL_VIDEO,
  };
}

export function useFetchAllVideo() {
  const dispatch = useDispatch();
  const boundAction = useCallback((...params) => dispatch(fetchAllVideo(...params)), [dispatch]);
  return { fetchAllVideo: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case VIDEO_FETCH_ALL_VIDEO:
      return {
        ...state,
      };

    default:
      return state;
  }
}
