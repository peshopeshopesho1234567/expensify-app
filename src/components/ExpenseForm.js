import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? props.expense.createdAt : moment(),
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      error: ''
    };
  }
  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = event => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onSubmit = event => {
    event.preventDefault();
    if (!this.state.description || !this.state.description) {
      this.setState(() => ({ error: 'Please provide description and amount.'}));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: 0,
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for you expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          { this.props.expense ? (
            <button>Edit Expense</button>
          ) : (
            <button>Add Expense</button>
          )}
        </form>
      </div>
    )
  }
}