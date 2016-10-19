import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{
			todos.map(todo =>
				<Todo key={todo.id}
					{...todo}
					onClick={ () => onTodoClick(todo.id) }
				/>
			)
		}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.array.isRequired
};

export default TodoList;
