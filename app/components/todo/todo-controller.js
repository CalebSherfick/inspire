import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	console.log(_todoService.Todos)
	let template = ''
	let task = _todoService.Todos
	task.forEach(t => {
		template += t.getTodoTemp()
	})
	document.getElementById('todos').innerHTML = template


	document.getElementById('form-content').innerHTML = `            
    <form onsubmit="app.controllers.todoController.addTask(event)">
        <input type="text" name="task" placeholder="Task" required>
        <button type="submit">Submit</button>
    </form>`
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}



	addTask(event) {
		event.preventDefault();
		let form = event.target
		let newTask = {
			description: form.task.value
		}
		_todoService.addTask(newTask)
		//Clears the form
		form.reset()
	}

	deleteTask(id) {
		_todoService.deleteTask(id)
	}

	completeTask(id) {
		_todoService.completeTask(id)
	}








	// toggleTodoStatus(todoId) {
	// 	// asks the service to edit the todo status
	// 	_todoService.toggleTodoStatus(todoId)
	// }

	// removeTodo(todoId) {
	// 	// ask the service to run the remove todo with this id
	// 	_todoService.removeTodo(todoId)
	// }



}
