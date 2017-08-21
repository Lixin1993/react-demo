import React from 'react'
import { Modal, Form, Input } from 'antd'
import PropTypes from 'prop-types'

const FormItem = Form.Item;
const echartType = {
    bar: '柱状图',
    pie: '饼图',
    map: '地图',
    line: '曲线图'
};

class PluginModal extends React.Component {
  render() {
    const { visible, onCancel, onOk, type } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return <Modal
        title='图表配置'
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
      >
      <Form>
          <FormItem label="图表类型" {...formItemLayout}>
            {getFieldDecorator('title', {
              initialValue: echartType[type]
            })(
              <Input readOnly />
            )}
          </FormItem>
        </Form>
    </Modal>
  }
}

const PluginModalCreate = Form.create()(PluginModal);

PluginModalCreate.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default PluginModalCreate