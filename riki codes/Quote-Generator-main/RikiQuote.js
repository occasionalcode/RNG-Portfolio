const Cartiquotes = [
  { quote: '"Protect your own sound."' },
  { quote: '"I\'d rather die before I come in last."' },
  { quote: '"I ain\'t feel like this in a long time."' },
  { quote: '"slatt*!+"' },
  { quote: '"I had to make something that no one else has ever done."' },
];

const Tommyquotes = [
  { quote: "\"You don't parley when you're on the backfoot.\"" },
  { quote: '"You can change what you do."' },
  {
    quote:
      '"This is the day we become respectable, but first, we do the dirty work."',
  },
  {
    quote:
      '"I learnt long ago to hate my enemies, but I\'ve never loved one before."',
  },
  { quote: '"The past is not of my concern."' },
];

const Mjquotes = [
  { quote: '"If you quit once, it becomes a habit. NEVER QUIT!"' },
  {
    quote:
      '"Talent wins games, but teamwork and intelligence wins championships."',
  },
  {
    quote: '"You must expect great things of yourself before you can do them."',
  },
  {
    quote:
      '"I can accept failure, everyone fails at something. But I can\'t accept not trying."',
  },
  { quote: '"Always turn a negative situation into a positive situation."' },
];

const Kobequotes = [
  { quote: '"Dedication makes dreams come true."' },
  {
    quote:
      '"Once you know what failure feels like, determination chases success."',
  },
  {
    quote:
      '"The most important thing is you must put everybody on notice that you\'re here and you are for real."',
  },
  {
    quote: '"After all, greatness is not for everybody."',
  },
  {
    quote:
      '"May you always remember to enjoy the road, especially when it\'s a hard one."',
  },
];

const Aliquotes = [
  { quote: '"I am the greatest, I said that even before I knew I was."' },
  {
    quote: '"It\'s not bragging if you can back it up."',
  },
  {
    quote: "\"I'm no leader; I'm a little, humble follower.\"",
  },
  {
    quote:
      '"Don\'t quit. Suffer now and live the rest of your life as a champion."',
  },
  {
    quote:
      "\"Float like a butterfly, sting like a bee. His hands can't hit what his eyes can't see. Now you see me, now you don't. George thinks he will, but I know he won't.\"",
  },
];

//function for the quote retrieval
function displayQuote(button, array, quotePlace) {
  const Quotebutton = document.getElementById(button);
  const quote = document.querySelector(quotePlace);

  let i = 0;

  Quotebutton.addEventListener("click", () => {
    quote.innerHTML = array[i].quote;
    i++;
    if (i == 5) {
      i = 0;
    }
  });
  return;
}

displayQuote("carti-button", Cartiquotes, "#carti-quote");
displayQuote("tommy-button", Tommyquotes, "#tommy-quote");
displayQuote("mj-button", Mjquotes, "#mj-quote");
displayQuote("kobe-button", Kobequotes, "#kobe-quote");
displayQuote("ali-button", Aliquotes, "#ali-quote");
