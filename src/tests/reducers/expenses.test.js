import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const newExpense =  {
    description: 'Fun',
    note: 'Nice',
    amount: 777,
    createdAt: moment()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Rolls Royce'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ {...expenses[0], ...updates }, expenses[1], expenses[2]] );
});

test('should not edit an expense if id is not found', () => {
  const updates = {
    description: 'Rolls Royce'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses] );
});