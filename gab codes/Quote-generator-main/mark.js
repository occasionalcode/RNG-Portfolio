// Collection Of Quote
const quotes = [{
    quote: `Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.`,
    author: `- Mark Zuckerberg`
}, {
    quote: `Ideas don’t come out fully formed , they only become clearer as you work on them . You just have to get started.`,
    author: `- Mark Zuckerberg`
}, {
    quote: `We Don't Build Services to Make Money, We Make Money To Build Services.`,
    author: `- Mark Zuckerberg`
}, {
    quote: `The greatest successes come from having the freedom to fail`,
    author: `- Mark Zuckerberg`
}, {
    quote: `Having two identities for yourself is an example of a lack of integrity.`,
    author: `- Mark Zuckerberg`

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