import { connect } from 'react-redux';
import { addTodo } from '../model/actions';

import TodoForm from '../components/TodoForm';

const mapStateToProps = () => { return {} };
const mapDispatchToProps = dispatch => {
	return {
		onAdd: text => dispatch(addTodo(text))
	};
}

const Adder = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default Adder;
