// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array object of quotes
var quotes = [];
quotes[0] = {
    'quote': 'quote',
    'source': 'source',
    'citation': 'citation',
    'year': 'year',
};
quotes[1] = {
    'quote': 'quote',
    'source': 'source',
    'citation': 'citation',
    'year': 'year',
};
quotes[2] = {
    'quote': 'quote',
    'source': 'source',
    'citation': 'citation',
    'year': 2018,
};

var randomQuote;

function getRandomQuote(){
    randomQuote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

function printQuote(){
    getRandomQuote();

    var newQuote = '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source
      '<span class="citation">' + randomQuote.citation + '</span>' +
      '<span class="year">' + randomQuote.year + '</span>' +
   '</p>';

   document.getElementById('quote-box').innerHTML = newQuote;
}

