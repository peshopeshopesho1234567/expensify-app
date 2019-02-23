import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '2',
  description: 'Ferrari',
  note: '',
  amount: 19500000,
  createdAt: 0
},{
  id: '3',
  description: 'Private Jet',
  note: '',
  amount: 777777777777,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;