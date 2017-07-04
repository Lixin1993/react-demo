import { connect } from 'react-redux'
import AntdTable from '../../../components/antd/antd-table'
import { fetchPostsTable } from '../../../fetch'
import { deleteRow } from '../../../actions/actionBar'


const mapStateToProps = (state) => {
    return {
        dataSources: state.reducerTable.responseTable
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        fetchPostsTable: fetchPostsTable,
        onDelete: index => dispatch(deleteRow(index))
    }
};

const AntdTableConncet = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntdTable);

export default AntdTableConncet
