//PRIVATE
import DateService from "./dateService.js";

const _ds = new DateService()

function drawData() {
  let time = _ds.Clock
  document.querySelector('#clock').innerHTML = time
  document.querySelector('#date').innerHTML = _ds.Date

  // if (+time[0] == 0 || (+time[0] == 1 && +time[1] == 0) || (+time[0] == 1 && +time[1] == 1)) {
  //   document.querySelector('#change-greeting').innerHTML = 'morning '
  // } else if (+time[1] >= 2 && +time[1] < 7) {
  //   document.querySelector('#change-greeting').innerHTML = 'afternoon '
  // } else if (+time[1] >= 7 || +time[0] == 2) {
  //   document.querySelector('#change-greeting').innerHTML = 'evening '
  // }
}


//PUBLIC
export default class DateController {
  constructor() {
    _ds.addSubscriber('clock', drawData)
    _ds.addSubscriber('today', drawData)

    _ds.getDate()

    function setTime() {
      _ds.getClock()
    }

    setTime()
    setInterval(setTime, 1000)
  }

}
