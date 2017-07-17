import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'
import TableModal from './antd-table-modal'
import { modifyTableInfo } from '../../actions/actionBar'

class AntdTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        visible: false,
        modalInfo: {}
      }
    }

    componentDidMount() {
      const { dispatch, fetchPostsTable } = this.props;
      dispatch(fetchPostsTable('./containers/antd/table/table.json'))
      .then(() => this.setState({ loading: false }));
    }

    onModal = record => {
      this.setState({
        visible: true,
        modalInfo: record ? record : { add : true }
      });
      this.form.resetFields();
    };

    offModal = () => {
      this.setState({
        visible: false
      });
      this.form.resetFields();
    };

    saveFormRef = (form) => {
      this.form = form;
    };

    onModify = (formData) =>　{
      this.props.dispatch(modifyTableInfo(formData));
      this.setState({visible: false});
    };

    render() {
      const { dataSources, tableDelete } = this.props;
      //表头字段
      const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age
      }, {
        title: '电话',
        dataIndex: 'telephone',
        key: 'telephone'
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }, {
        title: '操作',
        key: 'operation',
        render: (text, record, index) => {
          return(
            <span>
              <a className="ant-dropdown-link" onClick={() => this.onModal(record)}>修改信息</a>
              <span className="ant-divider"/>
              <Popconfirm title="确定删除该项?" onConfirm={() => {dataSources.splice(index, 1); tableDelete(dataSources)}}>
                <a href="#">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }];
      return(
      <div>
        <Button type="primary" icon="plus" style={{ marginBottom: '3vh' }} onClick={ () => this.onModal() }>添加新用户</Button>
        <Table dataSource={dataSources} columns={columns} loading={this.state.loading}
          pagination={{showTotal: (total, range) => `当前 ${range[0]}-${range[1]} 条, 共 ${total} 条`}} />
        <TableModal
          visible={this.state.visible}
          modalInfo={this.state.modalInfo}
          offModal={this.offModal}
          onModify={this.onModify}
          ref={this.saveFormRef}
          />
      </div>
      );
    }
}

AntdTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchPostsTable: PropTypes.func.isRequired,
  tableDelete: PropTypes.func.isRequired,
  dataSources: PropTypes.array.isRequired
};

export default AntdTable
