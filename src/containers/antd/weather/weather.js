/**
 * Created by U on 2017-07-01.
 */
import { connect } from 'react-redux'
import Weather from '../../../components/weather/city-weather'
import { fetchPostsWeather } from '../../../fetch'

const mapStateToProps = (state) => {
  return {
    weatherData: state.reducerWeather.responseWeather.today
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    fetchPostsWeather: fetchPostsWeather
  }
};

const WeatherConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);

export default WeatherConnect
