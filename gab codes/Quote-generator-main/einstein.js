// Collection Of Quote
const quotes = [{
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    author: `- Albert Einstein`
}, {
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`,
    author: `- Albert Einstein`
}, {
    quote: `If you can't explain it to a six year old, you don't understand it yourself.`,
    author: `- Albert Einstein`
}, {
    quote: `Logic will get you from A to Z; imagination will get you everywhere.`,
    author: `- Albert Einstein`
}, {
    quote: `Life is like riding a bicycle. To keep your balance, you must keep moving.`,
    author: `- Albert Einstein`

}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})