//PRIVATE
import GreetingService from "./greetingService.js";

const _greetingService = new GreetingService()

function drawUserForm() {
  let template = `<form class="form-inline" onsubmit="app.controllers.greetingController.addUser(event)">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="" name="name" placeholder=" Name...">
                    <button type="submit" class="btn btn-primary mb-2 shadow">Submit</button>
                  </form>`
  document.querySelector('#user-form').innerHTML = template
  document.querySelector('#user').innerHTML = 'Enter your name below!'
}

function drawNewUser() {
  let newUser = _greetingService.NewUser.name
  window.localStorage.setItem('name', JSON.stringify(newUser))
  document.querySelector('#user').innerHTML = newUser
  document.querySelector('#user-form').style.visibility = "hidden"
}


//PUBLIC
export default class GreetingController {
  constructor() {
    _greetingService.addSubscriber('changeUser', drawUserForm)
    _greetingService.addSubscriber('newUser', drawNewUser)

    window.localStorage.getItem('name')
    let newU = JSON.parse(window.localStorage.getItem('name'))
    document.querySelector('#user').innerHTML = newU || 'Caleb'
  }

  changeUser() {
    _greetingService.changeUser()
  }

  addUser(event) {
    event.preventDefault()
    let form = event.target
    let newUser = {
      name: form.name.value
    }
    _greetingService.addUser(newUser)
    form.reset()
  }

}