import React, {PropTypes} from 'react';
import ColorPicker from 'react-color-picker';
import ChooseColorItem from '../../components/chooseColorItem/chooseColorItem';
import './DarkerAndLighter.less';
import 'react-color-picker/index.css'
import DarkerAndLighterItem from '../../components/DarkerAndLighterItem/DarkerAndLighterItem';

export default class DarkerAndLighter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blockBg: true,
            color: '#FFF',
            arr: [1,2,3,4,5,6,7,8,9,10]
        }

        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(color, c) {

        this.setState({
            color
        });
    }

    render() {
        

        const template = this.props.colorSet.map((item) => {

            return  <DarkerAndLighterItem color={item} />;
        });


        return(
            <div>
                <div className="color-samples">
                    <h3 className="color-samples__title">{this.props.name}</h3>
                    {this.props.colorPicker ? '' : <ChooseColorItem />}
                </div>
                <div className={`color-samples__list ${this.state.blockBg ? '' : 'dark'}`}>
                    <div className="color-samples__wrap">
                        {template}
                    </div>
                </div>
                <div className="color-samples__btns">
                    <div className="btn btn-default color-btn" onClick={() => this.setState({blockBg: !this.state.blockBg})}>
                        {`${this.state.blockBg ? 'Dark' : 'Light'} background`}
                    </div>
                    <div className="btn btn-default select-btn">
                        Select all
                    </div>
                </div>
            </div>
        )
    }
}