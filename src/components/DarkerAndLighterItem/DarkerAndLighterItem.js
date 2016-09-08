import React from 'react';
import './DarkerAndLighterItem.less';
import {connect} from 'react-redux';
import setColors from '../../actions/changeColor';


const DarkerAndLighterItem = (props) => {
  return (
      <div className="color-samples__item" onClick={() => {
        props.dispatch(setColors(`rgb(${props.color})`));
        // props.actions(props.color);
      }} style={{background: `rgb(${props.color})`}}>
      </div>
  )
};


function mapStateToProps(state, ownProps) {
    return {
        colors: state.mainColorSet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: dispatch(setColors)
    };
}


export default connect(mapStateToProps)(DarkerAndLighterItem);