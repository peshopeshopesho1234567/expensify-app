import { addExpense, editExpense, removeExpense } from './../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('123abc', { note: 'A new note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'A new note'
    }
  })
});

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Ferrari 488',
    amount: '1800000',
    createdAt: 777,
    note: 'This is a really awesome car'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: expect.any(String)
    }
  })
});