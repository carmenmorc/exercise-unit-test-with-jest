// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromEuroToDollar(amount){
    return amount * oneEuroIs.USD;
};

function fromDollarToYen(amount){

    let inEuros = amount / oneEuroIs.USD;
    return inEuros * oneEuroIs.JPY;

};

function fromYenToPound(amount){

    let inEuros = amount / oneEuroIs.JPY;
    return inEuros * oneEuroIs.GBP;
};

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }