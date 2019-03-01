import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Review from '../Review/Review';


class SupportPage extends Component {
    state = {
        feeling: ''
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'COMMENT_INFO', payload: this.state.feeling })
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
        <p>Comments</p>
        <input onChange={this.onChangeFunction} type = "text"/>
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