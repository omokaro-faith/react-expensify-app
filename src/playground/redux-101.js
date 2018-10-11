import { createStore } from 'redux';

// Action generators --- Function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});

// Reducers 
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return  {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return  {
        count: state.count - action.decrementBy
      };
    case 'SET': 
      return {
        count: action.count
      }
    case 'RESET':
      return  {
        count: 0
      };
    default: 
      return state;
  }
}

const store = createStore(countReducers);

// Actions -- An object that gets sent to the store 

// Using subsrcibe and unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// unsubscribe(); // Used if you want to unsubscribe

// I'd like to set count
store.dispatch(setCount({ count: 101 }));

// I'd like to increment the count
store.dispatch(incrementCount({ incrementBy: 5 })) ;

// I'd like to decrement the count
store.dispatch(decrementCount({ decrementBy: 10 })) ;

// I'd like to reset the count
store.dispatch(resetCount()) ;
