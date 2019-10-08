import React, {Component} from 'react';
import Octicon, {Check, X} from '@githubprimer/octicons-react';

export default class TodoListItem extends Component {
	render() {
		const {id,  value, markAsDone, removeItem} = this.props;
		return (
			<li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
				{value}<span key={id} onClick={markAsDone.bind(null, id)}><Octicon icon={Check}/></span><span
				onClick={removeItem.bind(null, id)}><Octicon icon={X}/></span>
			</li>
		);
	}
}
