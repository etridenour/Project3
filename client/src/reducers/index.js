import { combineReducers } from "redux";

import drumReducer from "./reducers";
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
    drumReducer,
    auth,
    form: formReducer
});