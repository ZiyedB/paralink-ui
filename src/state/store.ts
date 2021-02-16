import { createStore } from 'redux';
import rootReducer from './root-reducer';
// import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from './root-saga';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);

// sagaMiddleware.run(rootSaga);
export default store;
