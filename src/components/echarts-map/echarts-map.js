import React from 'react'
import chinaJson from 'echarts/map/json/china.json'
import echarts from 'echarts'
import PropTypes from 'prop-types'

const Option = data => {
    return  {
        title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['iphone3','iphone4','iphone5']
    },
    visualMap: {
        type: 'piecewise',
        dimension: 1,
        pieces: [
            {value: 0, color: '#c23531'},
            {value: 1, color: '#2f4554'},
            {value: 2, color: '#61a0a8'},
            {value: 3, color: '#d48265'},
            {value: 4, color: '#91c7ae'},
            {value: 5, color: '#749f83'},
            {value: 6, color: '#ca8622'}
        ],
        formatter: function (value) {
            return data[value].name + '： ' + data[value].value[0];
        },
        right: 10,
        top: 'center'
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            // right: 50,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: data
        }
    ]
    }
}

class EchartsMap extends React.Component {

    componentDidMount() {
        echarts.registerMap('china', chinaJson);
        const map = echarts.init(this.refs.echartsMap);
        const { dispatch, fetchPostsMap } = this.props;
        dispatch(fetchPostsMap('./containers/echarts/map/map.json'))
        .then(data => map.setOption( Option(data.response)) );
    }

    render() {
        return <div style={{ height: '80vh', width: '100%' }} ref='echartsMap' />
    }
}

EchartsMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchPostsMap: PropTypes.func.isRequired
};

export default EchartsMap