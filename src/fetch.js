/**
 * Created by U on 2017-06-25.
 */
import fetch from 'isomorphic-fetch'
import {starActionBar, starActionBarSuccess, starActionMap, starActionMapSuccess} from './actions/actionBar'

export const fetchPostsBar = url => (dispatch) => {
  dispatch(starActionBar());
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(starActionBarSuccess(json)));
};

export const fetchPostsMap = url => (dispatch) => {
  dispatch(starActionMap());
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(starActionMapSuccess(json)));
};

export const fetchPostsTable = url => (dispatch) => {
  dispatch(starActionMap());
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(starActionMapSuccess(json)));
};