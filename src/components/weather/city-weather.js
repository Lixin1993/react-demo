/**
 * Created by U on 2017-07-01.
 */
import React from 'react'
import { Card, Row, Col } from 'antd'
import './weather.css'
import PropTypes from 'prop-types'

import weather_img from '../../img/sun.jpg'

class CityWeather extends React.Component {

  componentDidMount() {
    const { dispatch, fetchPostsWeather } = this.props;
    dispatch(fetchPostsWeather('http://v.juhe.cn/weather/index?cityname=%E6%88%90%E9%83%BD&dtype=json&format=&key=4c4caeac80ad3750021469bbb3b18d13'));
  }

  render() {
    const { weatherData } = this.props;
    return(
      <Row gutter={24}>
        <Col span={4}>
          <Card bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src={weather_img} />
            </div>
            <h2 className="weather-city">{ weatherData.city }</h2>
            <div className="custom-card">
              <Row>
                <span>天气情况：</span><span>{ weatherData.weather }</span>
              </Row>
              <div>
                <span>温度：</span><span>{ weatherData.temperature }</span>
              </div>
              <div>
                <span>风速：</span><span>{ weatherData.wind }</span>
              </div>
              <br/>

            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

CityWeather.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchPostsWeather: PropTypes.func.isRequired,
  weatherData: PropTypes.array.isRequired
};

export default CityWeather
