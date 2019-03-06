//PRIVATE
import DateService from "./dateService.js";

const _dateService = new DateService()

function drawData() {
  let time = _dateService.Clock
  document.querySelector('#clock').innerHTML = time
  document.querySelector('#date').innerHTML = _dateService.Date
}

//PUBLIC
export default class DateController {
  constructor() {
    _dateService.addSubscriber('clock', drawData)
    _dateService.addSubscriber('todaysDate', drawData)

    _dateService.getDate()

    function setTime() {
      _dateService.getClock()
    }
    setInterval(setTime, 10000)
    setTime()
  }

}