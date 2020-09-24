import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// const adminReducer = (state = [], action) => {
//     if (action.type === "GET_ORDERS") {
//         let newOrdersList = action.payload;
//         return newOrdersList;
//     }
//     return state
// }

const store = createStore(
    combineReducers({
        // homeScreen: homeScreenReducer,
        // addressForm: addressFormReducer,
        // checkout: checkoutReducer,
        // admin: adminReducer
    })
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);
