//PRIVATE
import DateService from "./dateService.js";

const _ds = new DateService()

function drawData() {
  let time = _ds.Clock
  document.querySelector('#clock').innerHTML = time
  document.querySelector('#date').innerHTML = _ds.Date
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
