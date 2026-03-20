

const hello = (name) => { console.log(`Hello, ${name}!`); }

hello('jtestekjas;ldkfnn;kjajnef');

//binding
username = "hello123";
setTimeout(() => {
    hello(username);
}, 1000);


username = "navy";
setTimeout(() =>  console.log('hello '+ username), 2000);

// callback function 
const greet = () => console.log('Hello, World!');
setTimeout(greet, 3000);



const add = (a,b,) => {
    return a + b;
}


const subtract = (a,b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a* b;
}

const divide = (a, b) => {
    return a / b;
}

setTimeout(() => {
    console.log('Addition: ' + add(5, 3));
    console.log('Subtraction: ' + subtract(5, 3));
    console.log('Multiplication: ' + multiply(5, 3));
    console.log('Division: ' + divide(6, 3));
}, 2000);
