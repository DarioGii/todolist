import React, {Component} from 'react'

export default class TodoForm extends Component {
	render() {
		const { onSubmit, onChange } = this.props;

		return (
			<form className="form-inline" onSubmit={onSubmit}>
				<div className="form-group mx-sm-3 mb-2">
					<input type="text" className="form-control" placeholder="Things to do" onChange={onChange} />
				</div>
				<button className="btn btn-primary mb-2">Add</button>
			</form>
		);
	}
}
