import * as redux from 'redux';
import counter from './reducers';

export default function getStore() {
  return redux.createStore(counter);
};