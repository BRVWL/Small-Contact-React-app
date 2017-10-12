import { createStore } from 'redux';
import chatReduser from '../reducers/reducer';

const store = createStore(
  chatReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux devtools
);
window.store = store; // для доступа к store из браузера

// на каждое изменение store будет выполнять этот callback
store.subscribe(() => {
  console.log('store has been changed!');
});

export default store;
