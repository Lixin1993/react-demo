import React from 'react'
import { Modal, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import './antd-table.css'

const FormItem = Form.Item;


const TableModal = Form.create()(
  (props) => {
    const { visible, offModal, onModify, form, modalInfo } = props;
    const { getFieldDecorator, getFieldsValue } = form;
    const onSave = () =>{
      const formData = getFieldsValue();
      const Data = Object.assign({}, modalInfo, formData);
      onModify(Data);
    };
    return (
      <Modal
        visible={visible}
        title="信息编辑"
        onCancel={offModal}
        onOk={onSave}
        >
        <Form layout="vertical">
          <FormItem label="姓名">
            {getFieldDecorator('name', {initialValue: modalInfo.name})(<Input />)}
          </FormItem>
          <FormItem label="年龄">
            {getFieldDecorator('age', {initialValue: modalInfo.age})(<Input />)}
          </FormItem>
          <FormItem label="电话">
            {getFieldDecorator('telephone', { initialValue: modalInfo.telephone})(<Input />)}
          </FormItem>
          <FormItem label="地址">
            {getFieldDecorator('address', { initialValue: modalInfo.address})(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

TableModal.propTypes = {
    modalInfo: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    offModal: PropTypes.func.isRequired,
    onModify: PropTypes.func.isRequired
};

export default TableModal