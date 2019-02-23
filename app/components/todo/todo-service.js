import Todo from "../../models/todo.js";

// @ts-ignore
let todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Contineur/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get Todos() {
		return _state.todos
	}

	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log(res)
				let data = res.data.data.map(d => new Todo(d))
				_setState('todos', data)
			})
			.catch(err => {
				console.error(err)
			})
	}







	addTask(rawTask) {
		let newTask = new Todo(rawTask)
		todoApi.post('', newTask)
			.then(res => {
				this.getTodos()
			})
	}

	deleteTask(id) {
		todoApi.delete(id)
			.then(res => {
				this.getTodos()
			})
	}

	completeTask(id) {
		let todo = _state.todos.find(todo => todo._id == id)
		todo.completed = !todo.completed
		todoApi.put(id, todo)
			.then(res => {
				this.getTodos()
			})
	}





	// toggleTodoStatus(todoId) {
	// 	let todo = _state.todos.find(todo => todo._id == todoId)
	// 	// Be sure to change the completed property to its opposite
	// 	// todo.completed = !todo.completed <-- THIS FLIPS A BOOL


















	// addTodo(todo) {
	// 	todoApi.post('', todo)
	// 		.then(res => {
	// 			// WHAT DO YOU DO AFTER CREATING A NEW TODO?
	// 		})
	// 		.catch(err => _setState('error', err.response.data))
	// }


	// 	todoApi.put(todoId, todo)
	// 		.then(res => {
	// 			//DO YOU WANT TO DO ANYTHING WITH THIS?
	// 		})
	// 		.catch(err => _setState('error', err.response.data))
	// }

	// removeTodo(todoId) {
	// 	// This one is on you to write.... 
	// 	// The http method is delete at the todoId
	// }

}
