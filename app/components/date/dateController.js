//PRIVATE
import DateService from "./dateService.js";

const _dateService = new DateService()

function drawData() {
  let time = _dateService.Clock
  document.querySelector('#clock').innerHTML = time
  // document.querySelector('#date').innerHTML = _dateService.Date

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
    _dateService.addSubscriber('clock', drawData)
    // _dateService.addSubscriber('todaysDate', drawData)

    // _dateService.getDate()

    function setTime() {
      _dateService.getClock()
    }
    setInterval(setTime, 1000)
    setTime()
  }

}
