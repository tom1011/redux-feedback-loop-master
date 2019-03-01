import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

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
        <div>
            <h1> Review Your Feedback</h1>
            <p>Feelings: {this.props.feelingsInfo.feeling} </p>
            <br/>
            <p>Understanding: {this.props.understandingInfo.understanding} </p>
            <br/>
            <p>Support: {this.props.supportInfo.support} </p>
            <br/>
            <p>Comments: {this.props.commentsInfo.comment} </p>
            <br/>
        </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
  
export default connect(mapReduxStateToProps)(Review);