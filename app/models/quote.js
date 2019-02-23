export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }



  getQuoteTemp() {
    return `    
    <h3>"${this.body}"</h3>
    <h4>${this.author}</h4>    
    `
  }
}