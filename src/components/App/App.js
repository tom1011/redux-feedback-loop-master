import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Review from '../Review/Review';
import FeelingsPage from '../FeelingsPage/FeelingsPage';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <FeelingsPage />
      <Understanding />
      <Support />
      <Review />
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (App);
