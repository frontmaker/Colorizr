import React from 'react';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css'
import './chooseColorItem.less';


export default class ChooseColorItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            color: "FFF"
        };

        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(color, c) {

        this.setState({
            color
        });
    }


    onTrigger() {

        this.setState({
            show: !this.state.show
        });

    }

    render() {

        const colorPicker = <div className="choose-color__picker"><ColorPicker onDrag={this.onDrag.bind(this)} value={this.state.color} /></div>

        return(
            <div>
                <span className="choose-color" onClick={this.onTrigger.bind(this)} style={{backgroundColor: 'rgb(147,75,157)'}}>
                </span>
                {this.state.show ? '' : colorPicker}
            </div>
        )
    }
}
