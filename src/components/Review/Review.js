import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import './Review.css';

class Review extends Component {

    submitButton = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data:{
                feeling: this.props.feelingsInfo,
                understanding: this.props.understandingInfo ,
                support: this.props.supportInfo,
                comments: this.props.commentsInfo }  
        }).then( () => {
            this.props.history.push('/finalPage')
            console.log('in post .then')
        })
    }

  render() {
      let isDisabled = true
      let buttonRender = null
      if (this.props.feelingsInfo !== 0 && 
        this.props.understandingInfo !== 0  &&
        this.props.supportInfo !== 0 &&
        this.props.commentsInfo !== ''
        ){
            isDisabled = false
        }
        if (isDisabled){

        } else {
            buttonRender =<button onClick={this.submitButton} disabled={isDisabled}>Submit</button>
        }

      
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
            {buttonRender}
        </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
  
export default connect(mapReduxStateToProps)(Review);