import {combineReducers} from 'redux';
import {reducer as authReducer} from '../store/auth/reducer';

const rootReducer = combineReducers({auth: authReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
