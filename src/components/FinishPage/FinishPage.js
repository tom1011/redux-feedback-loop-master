import React, { Component } from 'react';




class FinalPage extends Component {
    onNextClick = () => {
        this.props.history.push('/')
    }

  render() {
    return (
        <>
        <h2>Thank You for Your Feedback!!</h2>
        <h3>have a Wonderfull day.</h3>
        <button onClick={this.onNextClick}>New Feedback</button>
        </>
    );
  }
}



export default FinalPage;