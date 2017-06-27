import { connect } from 'react-redux'
import EchartsBar from '../../../components/echarts-bar/echarts-bar'
import { fetchPostsBar } from '../../../fetch'

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsBar: fetchPostsBar,
    dispatch: dispatch
  }
};

const connectEchartsBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(EchartsBar);

export default connectEchartsBar
