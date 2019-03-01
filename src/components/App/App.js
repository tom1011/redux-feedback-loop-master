import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (App);
