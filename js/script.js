// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// function that automatically calls printQuote every 10s
var intervalID = window.setInterval(printQuote, 10000);

// array object of quotes
var quotes = [];
quotes[0] = {
    'quote': 'quote1',
    'source': 'source1',
    'citation': 'citation',
    'year': 1993
};
quotes[1] = {
    'quote': 'quote2',
    'source': 'source2',
    'citation': 'citation',
    'year': 1994,
    'tag': ''
};
quotes[2] = {
    'quote': 'quote3',
    'source': 'source3',
    'citation': 'citation'
};

// random quote variable
var randomQuote;

// function to generate a random number between 0 and length of quotes array
function getRandomQuote(){
    randomQuote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

let randomColor;
// function to change background color
function changeBackgroundColor() {
    // creates a variable randomColor which generate a hex number as a string
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    // gets the body tag and changes the css style bgColor to the randomColor
    document.getElementsByTagName("Body")[0].style.backgroundColor = '#' + randomColor;

    // change button color
    document.getElementById("loadQuote").style.backgroundColor = '#' + randomColor;
}

// function to call getRandomQuote and to use the number generated to get the quote object
function printQuote(){
    getRandomQuote();
    changeBackgroundColor();

    // newQuote variable which stores the quote string
    var newQuote = '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' +  randomQuote.source + '</p>';
    
    // checking if object has citation property
    if(randomQuote.hasOwnProperty("citation")){
        // if it has a citation, concatenate it to string
        newQuote += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    // checking if object has year property
    if(randomQuote.hasOwnProperty("year")){
        // if it has a year, concatenate year to string
        newQuote += '<span class="year">' + randomQuote.year + '</span>';
    }

    newQuote += '</p>';

    document.getElementById('quote-box').innerHTML = newQuote;
}

