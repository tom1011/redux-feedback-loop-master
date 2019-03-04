import React, { Component } from 'react';
import "./FinishPage.css"


class FinalPage extends Component {
    onNextClick = () => {
        this.props.history.push('/')
    }

  render() {
    return (
        <>
        <div className='textaline'>
        <h2>Thank You for Your Feedback!!</h2>
        <h3>have a Wonderfull day.</h3>
        <button onClick={this.onNextClick}>New Feedback</button>
        </div>
        </>
    );
  }
}



export default FinalPage;