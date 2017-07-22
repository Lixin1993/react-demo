import React from 'react'
import { Modal, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import './antd-table.css'

const FormItem = Form.Item;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

const TableModal = Form.create()(
  (props) => {
    const { visible, offModal, onModify, form, modalInfo } = props;
    const { getFieldDecorator, getFieldsValue } = form;
    const onSave = () =>{
      const formData = getFieldsValue();
      if(modalInfo.add){
        formData.add = true;
      }
      const Data = Object.assign({}, modalInfo, formData);
      onModify(Data);
    };
    return (
      <Modal
        visible={visible}
        title= {modalInfo.add ? '新增用户' : '信息编辑'}
        onCancel={offModal}
        onOk={onSave}
        >
        <Form>
          <FormItem label="姓名" {...formItemLayout}>
            {getFieldDecorator('name', {initialValue: modalInfo.name})(<Input />)}
          </FormItem>
          <FormItem label="年龄" {...formItemLayout}>
            {getFieldDecorator('age', {initialValue: modalInfo.age})(<Input />)}
          </FormItem>
          <FormItem label="性别" {...formItemLayout}>
            {getFieldDecorator('sex', {initialValue: modalInfo.sex})(<Input />)}
          </FormItem>
          <FormItem label="电话" {...formItemLayout}>
            {getFieldDecorator('telephone', { initialValue: modalInfo.telephone})(<Input />)}
          </FormItem>
          <FormItem label="地址" {...formItemLayout}>
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
