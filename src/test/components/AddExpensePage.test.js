import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSumbit, history, wrapper;

beforeEach(() => {
  onSumbit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage
    onSumbit={onSumbit}
    history={history}
  />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSumbit).toHaveBeenLastCalledWith(expenses[1]);
});