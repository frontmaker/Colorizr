import React from 'react';
import './DarkerAndLighterItem.less';
import {connect} from 'react-redux';
import {addColor} from '../../actions/changeColor';


const DarkerAndLighterItem = (props) => {
  return (
      <div className="color-samples__item" onClick={() => {
        props.dispatch(addColor(`rgb(${props.color})`));
        // props.actions(props.color);
      }} style={{background: `rgb(${props.color})`}}>
      </div>
  )
};


function mapStateToProps(state, ownProps) {
    return {
        colors: state.selectedColors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: dispatch(addColor)
    };
}


export default connect(mapStateToProps)(DarkerAndLighterItem);