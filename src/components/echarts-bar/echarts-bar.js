/**
 * Created by U on 2017-06-23.
 */
import React from 'react'
import echarts from 'echarts'
import PropTypes from 'prop-types'

const Option = (data) => {
  return {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data:['订阅','互动','收视']
    },
    xAxis: [
      {
        type: 'category',
        data: Object.keys(data)
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '观众',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} 万'
        }
      },
      {
        type: 'value',
        name: '参与率',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} %'
        }
      }
    ],
    series: [
      {
        name:'订阅',
        type:'bar',
        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
        name:'互动',
        type:'bar',
        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name:'收视',
        type:'line',
        yAxisIndex: 1,
        data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
};

class EchartsBar extends React.Component {

  componentDidMount() {
    const bar = echarts.init(this.refs.echartsBar);
    const { dispatch, fetchPostsBar } = this.props;          //dispatch分发action、fetchPosts异步请求数据同时生成action、store状态库
    dispatch(fetchPostsBar('./containers/echarts/bar/barData.json'))  //得到的结果是promise对象，因此可以继续用then()
    .then( data => bar.setOption( Option(data.response)) );
  }

  render() {
    return (
      <div style={{ height: '72vh', width: '100%' }} ref="echartsBar" />
    );
  }
}

EchartsBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchPostsBar: PropTypes.func.isRequired
};

export default EchartsBar
