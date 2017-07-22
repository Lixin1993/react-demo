import { conncet } from 'redux'
import EchartsPlugin from '../../../components/echartsPlugin/echartsPlugin'

const mapState = () => {

}

const mapDispatch = () => {

}

const EchartsPluginConncet = conncet(
    mapState,
    mapDispatch
)(EchartsPlugin)

export default EchartsPluginConncet

