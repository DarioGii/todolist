import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			todoItems: []
		};
		
		this.onSubmit = this.onSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.onChange = this.onChange.bind(this);
		this.markAsDone = this.markAsDone.bind(this);
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.value);

		let list = this.state.todoItems;
		list.push(this.state.value);

		this.setState({
			value: '',
			todoItems: list
		});
		
		e.target.reset();
	};

	removeItem = (removeItem) => {
		let list = this.state.todoItems.filter((item, i) => i !== removeItem);

		this.setState({
			todoItems: list
		})
	};

	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	markAsDone(itemIndex) {
		console.log('in markAsDone');
	}

	render() {
		return (
			<div className="container">
				<br />
				<main>
					<div className="row">
						<TodoForm
							onSubmit={this.onSubmit}
							onChange={this.onChange} />
					</div>
					<div className="row">
						<div className='col'><TodoList
							toDo={this.state.todoItems}
							removeItem={this.removeItem}
							markAsDone={this.markAsDone} />
						</div>
					</div>
				</main>
			</div>
		);
	}
}
