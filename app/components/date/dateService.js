//PRIVATE
let time
function getTime() {
  let date = new Date()
  time = moment(date).format('LT');
}

let today
function getToday() {
  let date = new Date()
  today = moment(date).format('LL');
}

let _state = {
  clock: '',
  today: '',
}

let _subscribers = {
  clock: [],
  today: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//PUBLIC
export default class DateService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Clock() {
    return _state.clock
  }

  get Date() {
    return _state.today
  }

  getClock() {
    getTime()
    _setState('clock', time)
  }

  getDate() {
    getToday()
    _setState('today', today)
  }

}










