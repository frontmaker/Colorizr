import React from 'react';
import './DarkerAndLighterItem.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addColor, removeColor} from '../../actions/changeColor';


const DarkerAndLighterItem = (props) => {

  return (
      <div className="color-samples__item" onClick={() => {

        if (props.colors.includes(props.color)) {

            props.dispatch(removeColor(props.color));
            
        } else {

            props.dispatch(addColor(props.color));
            
        }

         props.update(props.color);

      }} style={{background: props.color}}>
      </div>
  )
};





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


export default connect(mapStateToProps)(DarkerAndLighterItem);