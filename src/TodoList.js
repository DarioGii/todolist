import React, {Component} from 'react';
import Octicon, {Checklist} from '@githubprimer/octicons-react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
	render() {
		const { toDo, removeItem, markAsDone } = this.props;

		return (
			<div className="card border-primary mb-3">
				<div className="card-body">
					<h3 className="card-title">To Do <Octicon icon={Checklist} size="medium"/></h3>
					<ul className="list-group list-group-flush">
						{toDo.map((value, id) => <TodoListItem
							id={id}
							value={value}
							markAsDone={markAsDone}
							removeItem={removeItem} />).reverse()}
					</ul>
				</div>
			</div>
		);
	}
}
