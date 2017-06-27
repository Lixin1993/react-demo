/**
 * Created by U on 2017-06-23.
 */
import { combineReducers } from 'redux';

//柱图reducer
const reducerBar = (state = {isFetching: null, didInvalidate: null, responseBar: null}, action) => {
  switch (action.type) {
    case 'starActionBar':
      state.isFetching = true;
      return  Object.assign({}, state, state.isFetching);
    case 'starActionBarFault':
      state.didInvalidate = true;
      return  Object.assign({}, state, state.didInvalidate);
    case 'starActionBarSuccess':
      state.responseBar = action.response;
      return  state;
    default:
      return state;
  }
};

//地图reducer
const reducerMap = (state = {isFetching: null, didInvalidate: null, responseMap: null}, action) => {
  switch (action.type) {
    case 'starActionMap':
      state.isFetching = true;
      return  Object.assign({}, state, state.isFetching);
    case 'starActionMapFault':
      state.didInvalidate = true;
      return  Object.assign({}, state, state.didInvalidate);
    case 'starActionMapSuccess':
      state.responseMap = action.response;
      return  state;
    default:
      return state;
  }
};

//地图reducer
const reducerTable = (state = {isFetching: null, didInvalidate: null, responseTable: null}, action) => {
  switch (action.type) {
    case 'starActionTable':
      state.isFetching = true;
      return  Object.assign({}, state, state.isFetching);
    case 'starActionTableFault':
      state.didInvalidate = true;
      return  Object.assign({}, state, state.didInvalidate);
    case 'starActionTableSuccess':
      state.responseTable = action.response;
      return  state;
    default:
      return state;
  }
};

//合并过后，state的结构与合并的reducer相同{ reducerBar: {}, reducerMap: {} }
const echartsReducer = combineReducers({
  reducerBar,
  reducerMap,
  reducerTable
})

export default echartsReducer
