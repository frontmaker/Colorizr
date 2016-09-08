import React from 'react';
import ColorPicker from 'react-color-picker';
import MainColorSet from '../../containers/MainColorSet/MainColorSet';
import DarkerAndLighter from '../../containers/DarkerAndLighter/DarkerAndLighter';
import './CreatePage.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import mainActions from '../../actions/mainActions';
import 'react-color-picker/index.css'
import hexRgb from 'hex-rgb';


class CreatePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      color: this.props.color,
      colorSet: []
    }

    this.style = {
      background: this.state.color
    }


    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(color, c) {

    this.setState({
      color
    });

    this.props.dispatch(mainActions(color));

    this.style = {
      background: color
    };

    this.handleColors(color);

  }


  handleColors(color) {
    const initialColor = hexRgb(color);
    var upArray = [];
    var downArray = [];

    function getResult(arr, action, countArray) {

      return arr.map(function(item, i) {

        if (i => countArray.length) {
          i = 0;
        }

        if (action) {
          return item > 225 ? item = 255 : item += countArray[i];
        }

        return item < 25 ? item = 0 : item -= countArray[i];

      });

    }

    function checkArray(arr,condition) {

      return arr.every(function(item) {
        return item == condition;
      });

    }


    function getUp() {
      var previous = initialColor;
      var previous2 = initialColor;
      var checking = false;
      var checking2 = false;

      while(!checking) {

        function getDay() {

          let result = getResult(previous, true, [25, 26]);

          previous = result;

          checking = checkArray(result, 255);

          if (!checking) {

            upArray.push(`rgb(${result})`);

          }

        }

        getDay();
      }

      while(!checking2) {
        function getMay() {

          let done = getResult(previous2, false, [25,26]);


          previous2 = done;

          checking2 = checkArray(done, 0);


          if (!checking2) {

            downArray.push(`rgb(${done})`);

          }

        }

        getMay();

      }

    }

    getUp();



    var finalArray = downArray.reverse().concat(upArray).slice(0, 11);


    this.setState({
      colorSet: finalArray
    });
    
  }

  titleColor() {
    const rgbColor = hexRgb(this.props.color);

    let counter = 0;
    const filterColors = rgbColor.forEach((item) => {
      if (item > 100) {
        counter += 1;
      }
    });

    return counter;
  }


  componentWillMount() {
    this.handleColors(this.state.color);
  }


  render() {

    return (
        <div style={this.style}>
          <div className="container">
            <div className="color-picker">
              <h3 style={{color: this.titleColor() >= 2 ? '#000' : '#FFF'}} className="color-picker__title">Choose your color</h3>
              <ColorPicker value={this.state.color} onDrag={this.onDrag} />
            </div>
            <MainColorSet />
            <DarkerAndLighter name="Darker and Lighter" colorPicker={true} colorSet={this.state.colorSet} />
            <DarkerAndLighter name="Mixed with" colorPicker={false} colorSet={this.state.colorSet} />
          </div>
        </div>
    )
  }
}



function mapStateToProps(state, ownProps) {
  return {
    color: state.selectColor,
    colors: state.selectedColors
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: dispatch(mainActions)
  };
}


export default connect(mapStateToProps)(CreatePage);



