import { connect } from 'react-redux';
import { toggleTodo } from '../model/actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => dispatch(toggleTodo(id))
	};
}

const App = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default App;
