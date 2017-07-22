/**
 * Created by U on 2017-07-09.
 */
import React from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import ReactD3BarChart from 'react-d3-components/lib/BarChart'

class WeatherModal extends React.Component {

  render() {
    const { visible, onCancel } = this.props;
    const data = [{
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}, {x: 'SomethingD', y: 3}]
    }];
    const BarChart = ReactD3BarChart;
    return (
      <Modal
        title='未来天气预报'
        width='80vw'
        footer={ null }
        visible={visible}
        onCancel={onCancel}
        maskClosable={false}
        >
        <BarChart
          data={data}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}
        />
      </Modal>
    );
  }
}

WeatherModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default WeatherModal
