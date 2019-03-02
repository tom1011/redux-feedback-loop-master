import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Review from '../Review/Review';

class SupportPage extends Component {
    state = {
        feeling: 0
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'SUPPORT_INFO', payload: this.state.feeling })
        this.props.history.push('/comments')
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
        <p> How supported do you Feel today?</p>
        <input onChange={this.onChangeFunction} type = "number"/>
        <button onClick={this.onNextClick}>Next</button>
        <Review />
        </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps) (SupportPage);