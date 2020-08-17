import {combineReducers} from 'redux';
import Register from './registerReducer'
import Login from './loginReducers'

const rootReducer=combineReducers({
 Register,Login
});

export default rootReducer;