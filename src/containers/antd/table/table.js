import { connect } from 'react-redux'
import AntdTable from '../../../components/antd/antd-table'
import { fetchPostsTable } from '../../../fetch'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        fetchPostsTable: fetchPostsTable
    }
}

const AntdTableConncet = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntdTable);

export default AntdTableConncet