import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import './Review.css';

class Review extends Component {

    updateDOMFeedback = () => {
    axios({
        method: 'GET',
        url: '/api/pizza'
    }).then((response) => {
        console.log(response);
        // response.data will be the array of Pizza
        this.props.dispatch({ type: '', payload: response.data })
    })
}



  render() {
      console.log(this.props.feelingsInfo)
    return (
        <div className="textaline">
            <h1> Review Your Feedback</h1>
            <p>Feelings: {this.props.feelingsInfo} </p>
            <br/>
            <p>Understanding: {this.props.understandingInfo} </p>
            <br/>
            <p>Support: {this.props.supportInfo} </p>
            <br/>
            <p>Comments: {this.props.commentsInfo} </p>
            <br/>
        </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
  
export default connect(mapReduxStateToProps)(Review);