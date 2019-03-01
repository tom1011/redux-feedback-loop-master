import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../Header/Header';
import Review from '../Review/Review';


class FeelingsPage extends Component {
    state = {
        feeling: 0
    }

    onNextClick = () => {
        this.props.dispatch({ type: 'FEELINGS_INFO', payload: this.state.feeling })
        this.props.history.push('/understanding')
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
        <h2>How are you Feeling today?</h2>
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

export default connect(mapReduxStateToProps) (FeelingsPage);