//PRIVATE
let _state = {
  changeUser: {},
  newUser: {}
}

let _subscribers = {
  changeUser: [],
  newUser: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//PUBLIC
export default class GreetingService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ChangeUser() {
    return _state.changeUser
  }

  get NewUser() {
    return _state.newUser
  }

  changeUser() {
    _setState('changeUser', ' ')
  }

  addUser(newUser) {
    _setState('newUser', newUser)
  }

}