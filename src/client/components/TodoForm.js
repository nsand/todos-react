import React, {Component, PropTypes} from 'react';

const TodoForm = ({onAdd}) => {
	let input;
	return (
		<form onSubmit={ e => {
			e.preventDefault();
			onAdd(input.value);
			input.value = '';
		} }>
			<input type="text" ref={node => input = node}></input>
		</form>
	)
}

TodoForm.proptypes = {
	onAdd: PropTypes.func.isRequired
};

export default TodoForm;
