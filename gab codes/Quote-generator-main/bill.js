// Collection Of Quote
const quotes = [{
    quote: `I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.`,
    author: `- Bill Gates`
}, {
    quote: `Your most unhappy customers are your greatest source of learning.`,
    author: `- Bill Gates`
}, {
    quote: `Success is a lousy teacher. It seduces smart people into thinking they can't lose.`,
    author: `- Bill Gates`
}, {
    quote: `Our success has really been based on partnerships from the very beginning.`,
    author: `- Bill Gates`
}, {
    quote: `Most people overestimate what they can do in one year and underestimate what they can do in ten years.`,
    author: `- Bill Gates`

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