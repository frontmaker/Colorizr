import React, {PropTypes} from 'react';
import './MainColorSet.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addColor, removeColor} from '../../actions/changeColor';
import ColorSetItem from '../../components/ColorSetItem/ColorSetItem';



class MainColorSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            maxLength: 10,
            selectedColors: []
        }

    }


    removeColor(color) {

        this.props.dispatch(removeColor(color));

    }



    renderColors() {
        let arr = [];
        let key = 0;
        const {colors} = this.props;
        const {maxLength} = this.state;


        colors.forEach((item,i) => {
            if (arr.length >= maxLength) {
                arr.splice(0,1);
                colors.splice(0,1);
            }


            // arr.push(<div className="color-list__item" key={key} style={{'background': item}}></div>)
            arr.push(<ColorSetItem key={key++} remove={this.removeColor.bind(this)} color={item}/>)
        });


        let sum = this.state.maxLength - arr.length;

        for (let i = 0; i < sum; i++) {
            // arr.push(<div key={key} className="color-list__item"></div>);
            arr.push(<ColorSetItem key={key++}/>)
        }
        


        return arr;
    }


    render() {

        return (
            <div className="selected-set">
                <h3 className="selected-set__title">Select up ten colors</h3>
                <p>Select colors by clicking on them</p>
                <div className="colors-list">
                    {this.renderColors()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        colors: state.selectedColors
    };
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addColor: addColor,
        removeColor: removeColor
    }, dispatch)
}


export default connect(mapStateToProps)(MainColorSet);



