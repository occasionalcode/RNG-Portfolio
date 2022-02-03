// Collection Of Quote
const quotes = [{
    quote: `Talent wins games, but teamwork and intelligence wins championships.`,
    author: `- Michael Jordan`
}, {
    quote: `I can accept failure, everyone fails at something. But I can't accept not trying.`,
    author: `- Michael Jordan`
}, {
    quote: `You must expect great things of yourself before you can do them.`,
    author: `- Michael Jordan`
}, {
    quote: `Some people want it to happen, some wish it would happen, and others make it happen.`,
    author: `- Michael Jordan`
}, {
    quote: `I've never lost a game I just ran out of time.`,
    author: `- Michael Jordan`

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