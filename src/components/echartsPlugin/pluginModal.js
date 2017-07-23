/**
 * Created by U on 2017-07-23.
 */
import React from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'

class PluginModal extends React.Component {
  render() {
    const { visible, onCancel, onOK, type } = this.props;
    return <Modal
        title='图表配置'
        visible={visible}
        onCancel={onCancel}
        onOk={onOK}
      >
      {type}
    </Modal>
  }
}

PluginModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOK: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default PluginModal
