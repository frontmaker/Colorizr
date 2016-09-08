import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactDOM from 'react-dom';
import increment from './actions/mainActions';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/main.less';


export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}




