/**
 * Created by U on 2017-06-22.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers/reducerBar'

//引入主页面框架
import MainPage from './containers/main/main'

//引入子页面
import Bar from './containers/echarts/bar/bar'
import Map from './containers/echarts/map/map'
import EchartsPlugin from './components/echartsPlugin/echartsPlugin'

import AntdTable from './containers/antd/table/table'
import Weather from './containers/antd/weather/weather'

const logger = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

const RoutePages = () => {

  return(

    <Provider store={store}>

      <Router history={hashHistory}>

        <Route path="/" component={MainPage}>

          <IndexRoute component={Bar}/>

          <Route path="/bar" component={Bar} />
          <Route path="/map" component={Map} />
          <Route path="/echartsPlugin" component={EchartsPlugin} />

          <Route path="/table" component={AntdTable} />
          <Route path="/weather" component={Weather} />

        </Route>

      </Router>

    </Provider>
  )

};

export default RoutePages
