import React from 'react';
import './ColorSetItem.less';


const ColorSetItem = (props) => {
    
    return(
        <div className="color-list__item" style={{'background': props.color}} onClick={() => {

            props.remove(props.color);


        }}>
        </div>
    )
};


export default ColorSetItem;