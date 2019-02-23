import { createStore } from 'redux';

// action generators
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count = 0} = {}) => ({
  type: 'SET',
  count
});

// reducers - pure funciton
const conutReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
};

// the store of the app
const store = createStore(conutReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch acitons
store.dispatch(incrementCount({
  incrementBy: 5
}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({
  decrementBy: 5
}));

store.dispatch(setCount({
  count: 777
}));

unsubscribe();
