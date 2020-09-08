import {combineReducers} from 'redux';
import {
  reducer as authReducer,
  actions as authActions,
} from '../store/auth/reducer';

const rootReducer = combineReducers({auth: authReducer});

export default rootReducer;
