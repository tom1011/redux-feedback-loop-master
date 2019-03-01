import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";


class UnderstandingPage extends Component {
    state = {
        feeling: 0
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'UNDERSTANDING_INFO', payload: this.state.feeling })
    }

    onChangeFunction = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

  render() {
    return (
        <>
        <input onChange={this.onChangeFunction} type = "number"/>
        <button onClick={this.onNextClick}>Next</button>
        </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (UnderstandingPage);