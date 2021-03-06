import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Review from '../Review/Review';
import './Understanding.css';


class UnderstandingPage extends Component {
    state = {
        feeling: 0
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'UNDERSTANDING_INFO', payload: this.state.feeling })
        this.props.history.push('/support')
    }

    onChangeFunction = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

  render() {
    return (
        <>
        <Header />
        <div className="textaline">
        <h2> How well are you understanding the material?</h2>
        <input onChange={this.onChangeFunction} type = "number"/>
        <button onClick={this.onNextClick}>Next</button>
        </div>
        <Review />
        </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (UnderstandingPage);