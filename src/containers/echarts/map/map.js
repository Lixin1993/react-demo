import { connect } from 'react-redux'
import EchartsMap from '../../../components/echarts-map/echarts-map'
import { fetchPostsMap } from '../../../fetch'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsMap: fetchPostsMap,
        dispatch: dispatch
    }
}

const connectEchartsMap = connect(
   mapStateToProps,
   mapDispatchToProps
)(EchartsMap);

export default connectEchartsMap