/**
 * Created by U on 2017-06-23.
 */
import { combineReducers } from 'redux'

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

//列表reducer
const reducerTable = (state = {isFetching: null, didInvalidate: null, responseTable: []}, action) => {
  let newState = {};
  switch (action.type) {
    case 'starActionTable':   //开始抓取数据
      newState.isFetching = true;
      return  Object.assign({}, state, newState);
    case 'starActionTableFault':  //请求出错
      newState.didInvalidate = true;
      return  Object.assign({}, state, newState);
    case 'starActionTableSuccess': //请求成功
      newState.responseTable = action.response;
      return  Object.assign({}, state, newState);
    case 'deleteRow':  //删除单元行操作
      newState = Object.assign({}, state);
      newState.responseTable.splice(action.deleteIndex, 1);
      return  newState;
    case 'modifyInfo':
      newState = Object.assign({}, state);
      newState.responseTable.map((data, index) => {
        if(data.key === action.formData.key) {
          newState.responseTable[index] = action.formData;
        }
      });
      return  newState;
    default:
      return state;
  }
};

const reducerWeather = (state = {isFetching: null, didInvalidate: null, responseWeather: []}, action) => {
  let newState = {};
  switch (action.type) {
    case 'starActionWeather':   //开始抓取数据
      newState.isFetching = true;
      return  Object.assign({}, state, newState);
    case 'starActionWeatherFault':  //请求出错
      newState.didInvalidate = true;
      return  Object.assign({}, state, newState);
    case 'starActionWeatherSuccess': //请求成功
      newState.responseWeather = action.response;
      return  Object.assign({}, state, newState);
    default:
      return state;
  }
};

//合并过后，state的结构与合并的reducer相同{ reducerBar: {}, reducerMap: {} }
const echartsReducer = combineReducers({
  reducerBar,
  reducerMap,
  reducerTable,
  reducerWeather
});

export default echartsReducer
