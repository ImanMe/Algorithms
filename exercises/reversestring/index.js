// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}


module.exports = reverse;

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');

// }

// function reverse(str) {
//     let reversed = '';

//     for (const character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }


// Bad one
// reverse = (str) => {
//     var reversed = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }

//     return reversed;
// }