import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const feelingsInfo = (state = {feeling: 5}, action) => { 
    return state
}

const understandingInfo = (state = {understanding: 4}, action) => { 
    return state
}
const supportInfo = (state = {support: 3}, action) => { 
    return state
}
const commentsInfo = (state = {comment: "hello world"}, action) => { 
    return state
}


const storeInstance = createStore(
    combineReducers({
        feelingsInfo,
        understandingInfo,
        supportInfo,
        commentsInfo,
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));