import { combineReducers } from 'redux';
// import counterReducer from './Counter/counter.reducer';
import { UserReducer } from './user';

const rootReducer = combineReducers({
  user: UserReducer,
});
export default rootReducer;
