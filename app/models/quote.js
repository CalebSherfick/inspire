export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }



  getQuoteTemp() {
    return `    
    <h3 class="texty">"${this.body}"</h3>
    <h4 class="texty">- ${this.author}</h4>    
    `
  }
}