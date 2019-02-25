export default class Todo {
  constructor(data) {
    console.log('[RAW TODO API DATA]', data);
    this.description = data.description
    this.completed = data.completed
    this.user = data.user
    this._id = data._id
  }

  getTodoTemp() {
    if (this.completed == true) {
      return `
      <div class="col-md-3">
  <div class="card">
  <div class="card-body">
    <h4 class="card-title texty"> <del>${this.description}</del>  </h4>    
    <button onclick="app.controllers.todoController.completeTask('${this._id}')">Complete</button>
    <button onclick="app.controllers.todoController.deleteTask('${this._id}')">Remove</button>
  </div>
</div>
</div>
   `
    } else {
      return `
      <div class="col-md-3">
  <div class="card">
  <div class="card-body">
    <h4 class="card-title texty">${this.description}</h4>    
    <button onclick="app.controllers.todoController.completeTask('${this._id}')">Complete</button>
    <button onclick="app.controllers.todoController.deleteTask('${this._id}')">Remove</button>
  </div>
</div>
</div>
   `
    }
  }
}




