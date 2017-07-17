/**
 * Created by U on 2017-07-01.
 */
import React from 'react'
import { Card, Row, Col } from 'antd'
import './weather.css'
import PropTypes from 'prop-types'
import WeatherModal from './weather-modal'

import weather_img from '../../img/sun.jpg'

class CityWeather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    const { dispatch, fetchPostsWeather } = this.props;
    dispatch(fetchPostsWeather('http://v.juhe.cn/weather/index?cityname=%E6%88%90%E9%83%BD&dtype=json&format=&key=4c4caeac80ad3750021469bbb3b18d13'));
  }

  //关闭弹框
  onCancel = () => {
    this.setState({ visible: false })
  };

  //打开弹框
  onModal = () => {
    this.setState({ visible: true })
  };

  render() {
    const { weatherData } = this.props;
    return(
      <div id="weather">
        <Row gutter={24}>
          <Col span={6}>
            <Card bodyStyle={{ padding: 0 }} onClick={ this.onModal }>
              <div className="custom-image">
                <img alt="example" width="100%" src={weather_img} />
              </div>
              <h2 className="weather-city">{ weatherData.city }</h2>
              <div className="custom-card">
                <div>
                  <h3>{ weatherData.week }</h3>
                </div>
                <div>
                  <span>天气情况：{ weatherData.weather }</span>
                </div>
                <div>
                  <span>温度：{ weatherData.temperature }</span>
                </div>
                <div>
                  <span>风速：{ weatherData.wind }</span>
                </div>
                <div>
                  <span>建议：{ weatherData.dressing_advice }</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <WeatherModal visible={this.state.visible} onCancel={ this.onCancel } />
      </div>
    );
  }
}

CityWeather.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchPostsWeather: PropTypes.func.isRequired,
  weatherData: PropTypes.array.isRequired
};

export default CityWeather
