import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();
store.dispatch(addExpense({ description: 'Ferrari 488', amount: 700000000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 70000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 43000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));