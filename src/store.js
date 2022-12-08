import * as redux from 'redux';
import counter from './reducers';


const store = redux.createStore(counter);
store.state = store.getState();
export default store;