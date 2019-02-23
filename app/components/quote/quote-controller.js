import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  console.log("THE QUOTE SAYS:", _qs.Quote)
  document.getElementById('quote').innerHTML = _qs.Quote.getQuoteTemp()
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}
