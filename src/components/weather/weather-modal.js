/**
 * Created by U on 2017-07-09.
 */
import React from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import echarts from 'echarts'

class WeatherModal extends React.Component {

  componentDidUpdate() {
    const option = () => {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最高气温', '最低气温']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [
                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'},
                [{
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                }, {
                  symbol: 'circle',
                  label: {
                    normal: {
                      position: 'start',
                      formatter: '最大值'
                    }
                  },
                  type: 'max',
                  name: '最高点'
                }]
              ]
            }
          }
        ]
      };
    };
    const weatherChart = echarts.init(this.refs.weatherCharts);
    weatherChart.setOption(option());
  }


  render() {
    const { visible, onCancel } = this.props;
    return (
      <Modal
        title='未来天气预报'
        width='80vw'
        footer={ null }
        visible={visible}
        onCancel={onCancel}
        maskClosable={false}
        >
        <div ref="weatherCharts" className="weatherChart" />
      </Modal>
    );
  }
}

WeatherModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default WeatherModal
