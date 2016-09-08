import React, {PropTypes} from 'react';
import ColorPicker from 'react-color-picker';
import ChooseColorItem from '../../components/chooseColorItem/chooseColorItem';
import './DarkerAndLighter.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setColors} from '../../actions/changeColor';
import 'react-color-picker/index.css'
import DarkerAndLighterItem from '../../components/DarkerAndLighterItem/DarkerAndLighterItem';

class DarkerAndLighter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blockBg: true,
            color: '#FFF',
            newArr: []
        }


        this.arr = [];
        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(color, c) {

        this.setState({
            color
        });
    }


    updateColors(color) {

        // this.setState({
        //     newArr: colors.push(color)
        // });
       this.arr.push(color);

        console.log(this.arr);

    }

    render() {
        
        let key = 0;

        const template = this.props.colorSet.map((item) => {

            return  <DarkerAndLighterItem update={this.updateColors.bind(this)} key={key++} color={item} />;

        });

        let removeAllBtn;


        if (this.props.colors.length > 0) {
            removeAllBtn = <div className="btn btn-default select-btn" onClick={() => {this.props.dispatch(setColors(this.arr))}}>
                                Remove all
                            </div>
        } else {
            removeAllBtn = ''
        }

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
                    <div className="btn btn-default select-btn" onClick={() => {

                        this.props.dispatch(setColors(this.props.colorSet));

                    }}>
                        Select all
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        color: state.selectColor,
        colors: state.selectedColors,
        DarkerAndLighter: state.DarkerAndLighter
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: dispatch(setColors)
    };
}


export default connect(mapStateToProps)(DarkerAndLighter);