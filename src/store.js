import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';

const middleware = [thunk];

const store = createStore(
  combineReducers({
    reducer,
  }),
  applyMiddleware(...middleware)
);

export default store;
