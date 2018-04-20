import {createStore, applyMiddleware} from 'redux';
import {reducer as cheeseReducer} from '../reducers/cheese';
import thunk from 'redux-thunk';

const store = createStore(cheeseReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware());
                                        
export default store;