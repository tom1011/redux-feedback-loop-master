import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const feelingsInfo = (state = 0, action) => { 
    if (action.type === 'FEELINGS_INFO'){
        console.log('in feeling info,', action.payload)
        return action.payload
    }
    return state
}
const understandingInfo = (state = 0, action) => { 
    if (action.type === 'UNDERSTANDING_INFO'){
        console.log('in understanding info,', action.payload)
        return action.payload
    }
    return state
}
const supportInfo = (state = 0, action) => { 
    if (action.type === 'SUPPORT_INFO'){
        console.log('in understanding info,', action.payload)
        return action.payload
    }
    return state
}

const commentsInfo = (state = "hello world", action) => { 
    if (action.type === 'COMMENT_INFO'){
        console.log('in understanding info,', action.payload)
        return action.payload
    }
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