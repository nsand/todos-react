import { combineReducers } from 'redux';

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

function todos(state = [{text: 'hello', completed: true, id: 0}], action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text, completed: false, id: state.length}];
		case TOGGLE_TODO:
			return state.map((todo, idx) => idx === action.index ? Object.assign({}, todo, {completed: !todo.completed}) : todo);
		default:
			return state;
	}
}

const app = combineReducers({
	todos
});

export default app;
