import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

//表头字段
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
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
  render: () => {
    return(
      <span>
        <a href="#">修改信息</a>
        <span className="ant-divider" />
        <a href="#">查看详情</a>
        <span className="ant-divider" />
        <a href="#" className="ant-dropdown-link">
          删除
        </a>
      </span>
    );
  }
}];

let dataSource = [];

class AntdTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: true
      }
    }

    componentDidMount() {
      const { dispatch, fetchPostsTable } = this.props;
      dispatch(fetchPostsTable('./containers/antd/table/table.json'))
      .then((data) => {
        dataSource = data.response;
        this.setState({ loading: false });
      });
    }

    render() {
        return <Table 
        dataSource={dataSource} 
        columns={columns} 
        loading={this.state.loading}
        pagination={{showTotal: (total, range) => `当前 ${range[0]}-${range[1]} 条, 共 ${total} 条`}}
         />
    }
}

AntdTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchPostsTable: PropTypes.func.isRequired
}

export default AntdTable