// Collection Of Quote
const quotes = [{
    quote: `When something is important enough, you do it even if the odds are not in your favour.`,
    author: `- Elon Musk`
}, {
    quote: `You should take the approach that you’re wrong. Your goal is to be less wrong.`,
    author: `- Elon Musk`
}, {
    quote: `You get paid in direct proportion to the difficulty of problems you solve`,
    author: `- Elon Musk`
}, {
    quote: `It is possible for ordinary people to choose to be extraordinary.`,
    author: `- Elon Musk`
}, {
    quote: `No, I don't ever give up. I'd have to be dead or completely incapacitated`,
    author: `- Elon Musk`

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