import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Review from '../Review/Review';
import FeelingsPage from '../FeelingsPage/FeelingsPage';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
      <Router>
          <div>
          {/* <Header /> */}
          <Route exact path="/" component={FeelingsPage} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          {/* <Review /> */}
          </div>
        </Router>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (App);
