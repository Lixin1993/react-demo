import React from 'react'
import PluginModal from './pluginModal'

const echartType = {
    bar: '柱状图',
    pie: '饼图',
    map: '地图',
    line: '曲线图'
};

class EchartsPlugin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          text: '',
          visible: false
        }
    }

    //pluginModal
    onCancel = () => {
      this.setState({ visible: false });
    };

    onOk = () => {
      this.setState({ visible: true });
    };

    drag = (ev) => {
        ev.dataTransfer.setData('Text',ev.target.id);
    };

    drop = (ev) => {
        ev.preventDefault();
        const data=ev.dataTransfer.getData('Text');
        this.setState({
          text: echartType[data],
          visible: true
        });
    };

    allowDrop = (ev) => {
        ev.preventDefault();
    };

    render() {
        const boxStyle = {
            height: '30vh',
            width: '30vw',
            border: '1px solid #ccc',
            marginTop: '5vh'
        };
        return (
            <div>
                <div
                    style={{ padding: 5, border: '1px solid #ccc', display: 'inline-block', marginRight: '3vw' }}
                    id='map'
                    draggable={true}
                    onDragStart={this.drag}
                >
                    echartsMap
                </div>
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

                <div style={boxStyle} onDrop={this.drop} onDragOver={this.allowDrop} > {this.state.text} </div>
                <PluginModal
                  onOk={this.onOk}
                  onCancel={this.onCancel}
                  visible={this.state.visible}
                  type={this.state.text}
                  />
            </div>
        );
    }
}

export default EchartsPlugin
