import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import drumReducer from './reducers/drumReducer';
import Main from './components/Main';

import {BrowserRouter} from 'react-router-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

var store = createStore(drumReducer,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
