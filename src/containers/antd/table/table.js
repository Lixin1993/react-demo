import { connect } from 'react-redux'
import AntdTable from '../../../components/antd/antd-table'
import { fetchPostsTable } from '../../../fetch'
import { deleteRow, addRow } from '../../../actions/actionBar'


const mapStateToProps = (state) => {
    const table = state.reducerTable;
    return {
        dataSources: table.responseTable
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        addRow: data => dispatch(addRow(data)),
        fetchPostsTable: fetchPostsTable,
        tableDelete: data => dispatch(deleteRow(data))
    }
};

const AntdTableConncet = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntdTable);

export default AntdTableConncet
