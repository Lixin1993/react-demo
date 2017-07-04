/**
 * Created by U on 2017-06-25.
 */
import fetch from 'isomorphic-fetch'
import * as actions from './actions/actionBar'

export const fetchPostsBar = url => (dispatch) => {
  dispatch(actions.starActionBar());
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(actions.starActionBarSuccess(json)));
};

export const fetchPostsMap = url => (dispatch) => {
  dispatch(actions.starActionMap());
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(actions.starActionMapSuccess(json)));
};

export const fetchPostsTable = url => (dispatch) => {
  dispatch(actions.starActionTable());
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(actions.starActionTableSuccess(json)));
};


const weatherData = {'resultcode':'200','reason':'查询成功','result':{'sk':{'temp':'34','wind_direction':'西南风','wind_strength':'1级','humidity':'46%','time':'15:45'},'today':{'temperature':'23℃~31℃','weather':'小雨转阴','weather_id':{'fa':'07','fb':'02'},'wind':'微风','week':'星期一','city':'成都','date_y':'2017年07月03日','dressing_index':'热','dressing_advice':'天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。','uv_index':'弱','comfort_index':'','wash_index':'不宜','travel_index':'较不宜','exercise_index':'较不宜','drying_index':''},'future':{'day_20170703':{'temperature':'23℃~31℃','weather':'小雨转阴','weather_id':{'fa':'07','fb':'02'},'wind':'微风','week':'星期一','date':'20170703'},'day_20170704':{'temperature':'22℃~31℃','weather':'阴转暴雨','weather_id':{'fa':'02','fb':'10'},'wind':'微风','week':'星期二','date':'20170704'},'day_20170705':{'temperature':'22℃~24℃','weather':'暴雨转大雨','weather_id':{'fa':'10','fb':'09'},'wind':'微风','week':'星期三','date':'20170705'},'day_20170706':{'temperature':'22℃~27℃','weather':'小雨转大雨','weather_id':{'fa':'07','fb':'09'},'wind':'微风','week':'星期四','date':'20170706'},'day_20170707':{'temperature':'22℃~29℃','weather':'阵雨转多云','weather_id':{'fa':'03','fb':'01'},'wind':'微风','week':'星期五','date':'20170707'},'day_20170708':{'temperature':'22℃~24℃','weather':'暴雨转大雨','weather_id':{'fa':'10','fb':'09'},'wind':'微风','week':'星期六','date':'20170708'},'day_20170709':{'temperature':'22℃~27℃','weather':'小雨转大雨','weather_id':{'fa':'07','fb':'09'},'wind':'微风','week':'星期日','date':'20170709'}}},'error_code':0};
export const fetchPostsWeather = url => (dispatch) => {
  dispatch(actions.starActionWeather());
  return fetch(url, {mode: 'no-cors'})
    .then(response => {
      if(response.status !== 200) {
        dispatch(actions.starActionWeatherSuccess(weatherData.result))
      }
    }).catch(error => console.log(error));
};
