import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";


class SupportPage extends Component {
    state = {
        feeling: 0
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'SUPPORT_INFO', payload: this.state.feeling })
    }

    onChangeFunction = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

  render() {
    return (
        <>
        <p>Support</p>
        <input onChange={this.onChangeFunction} type = "number"/>
        <button onClick={this.onNextClick}>Next</button>
        </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (SupportPage);