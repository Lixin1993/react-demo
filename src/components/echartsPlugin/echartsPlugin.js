import React from 'react'
import echarts from 'echarts'
import PluginModal from './pluginModal'
import optionFun from './echartsOptions'

let echartsComponent = {}; //echarts 实例对象

class EchartsPlugin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          type: '',
          visible: false
        }
    }

    //pluginModal
    onCancel = () => {
      this.setState({ visible: false });
    };

    onOk = () => {
      this.setState({ visible: false });
      //销毁上一个实例对象
      if(echartsComponent){
        echarts.dispose(echartsComponent);
      }
      echartsComponent = echarts.init(this.refs.echarts);
      echartsComponent.setOption(optionFun(this.state.type));
    };

    drag = (ev) => {
        ev.dataTransfer.setData('Text',ev.target.id);
    };

    drop = (ev) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('Text');
        this.setState({
          type: data,
          visible: true
        });
    };

    allowDrop = (ev) => {
        ev.preventDefault();
    };

    render() {
        const boxStyle = {
            height: '60vh',
            width: '100%',
            border: '1px solid #ccc',
            marginTop: '5vh'
        };
        return (
            <div>
                <div
                    style={{ padding: 5, border: '1px solid #ccc', display: 'inline-block', marginRight: '3vw' }}
                    id='pie'
                    draggable={true}
                    onDragStart={this.drag}
                >
                    echartsPie
                </div>
                <div
                    style={{ padding: 5, border: '1px solid #ccc', display: 'inline-block', marginRight: '3vw' }}
                    id='line'
                    draggable={true}
                    onDragStart={this.drag}
                >
                    echartsLine
                </div>
                <div
                    style={{ padding: 5, border: '1px solid #ccc', display: 'inline-block', marginRight: '3vw' }}
                    id='bar'
                    draggable={true}
                    onDragStart={this.drag}
                >
                    echartsBar
                </div>

                <div style={boxStyle} onDrop={this.drop} onDragOver={this.allowDrop} ref='echarts' />
                <PluginModal
                  onOk={this.onOk}
                  onCancel={this.onCancel}
                  visible={this.state.visible}
                  type={this.state.type}
                  />
            </div>
        );
    }
}

export default EchartsPlugin